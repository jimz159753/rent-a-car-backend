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
} from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Documents')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) { }

  @Post()
  @HttpCode(201)
  @HttpCode(400)
  @ApiResponse({ status: 201, description: 'Document created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentsService.create(createDocumentDto);
  }

  @Get()
  @HttpCode(200)
  @HttpCode(404)
  @ApiResponse({ status: 200, description: 'Documents found' })
  @ApiResponse({ status: 404, description: 'Documents not found' })
  findAll() {
    return this.documentsService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @HttpCode(404)
  @ApiResponse({ status: 200, description: 'Document found' })
  @ApiResponse({ status: 404, description: 'Document not found' })
  findOne(@Param('id') id: string) {
    return this.documentsService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(204)
  @HttpCode(404)
  @ApiResponse({ status: 204, description: 'Document updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Document not found' })
  update(
    @Param('id') id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
  ) {
    return this.documentsService.update(id, updateDocumentDto);
  }

  @Delete(':id')
  @HttpCode(204)
  @HttpCode(404)
  @ApiResponse({ status: 204, description: 'Document removed successfully' })
  @ApiResponse({ status: 404, description: 'Document not found' })
  remove(@Param('id') id: string) {
    return this.documentsService.remove(id);
  }
}
