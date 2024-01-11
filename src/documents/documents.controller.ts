import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { ApiBearerAuth, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Documents')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) { }

  @Post()
  @ApiConsumes('multipart/form-data')
  @HttpCode(HttpStatus.CREATED)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Document created successfully' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @UseInterceptors(
    FileInterceptor("document", {
      storage: diskStorage({
        destination: './files',
        filename: (_request, file, callback) => {
          callback(null, `${new Date().getTime()}-${file.originalname}`)
        }
      }),
    }),
  )
  create(@Body() createDocumentDto: any, @UploadedFile() file: Express.Multer.File) {
    const newData = JSON.parse(createDocumentDto.data)
    const newDocument = { ...newData, name: file.filename, client: JSON.parse(newData.client), vehicle: JSON.parse(newData.vehicle) }
    return this.documentsService.create(newDocument);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.OK, description: 'Documents found' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Documents not found' })
  findAll() {
    return this.documentsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.OK, description: 'Document found' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Document not found' })
  findOne(@Param('id') id: string) {
    return this.documentsService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Document updated successfully' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Document not found' })
  update(
    @Param('id') id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
  ) {
    return this.documentsService.update(id, updateDocumentDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Document removed successfully' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Document not found' })
  remove(@Param('id') id: string) {
    return this.documentsService.remove(id);
  }
}
