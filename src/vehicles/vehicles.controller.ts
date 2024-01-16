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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { ApiBearerAuth, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('Vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) { }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiConsumes('multipart/form-data')
  @HttpCode(HttpStatus.CREATED)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Vehicle created successfully' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: './files',
        filename: (_request, file, callback) => {
          callback(null, `${new Date().getTime()}-${file.originalname}`)
        }
      }),
    }),
  )
  create(@Body() createVehicleDto: CreateVehicleDto, @UploadedFile() file: Express.Multer.File) {
    createVehicleDto.image = file.filename
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.OK, description: 'Vehicles found' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Vehicles not found' })
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.OK, description: 'Vehicle found' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Vehicle not found' })
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id);
  }

  @Get('category/:category')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.OK, description: 'Vehicle found' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Vehicle not found' })
  findByCategory(@Param('category') category: string) {
    return this.vehiclesService.findByCategory(category);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Vehicle updated successfully' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Vehicle not found' })
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehiclesService.update(id, updateVehicleDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Vehicle removed successfully' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Vehicle not found' })
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id);
  }
}
