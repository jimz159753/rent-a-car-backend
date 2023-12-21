import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) { }

  @Post()
  @HttpCode(201)
  @HttpCode(400)
  @ApiResponse({ status: 201, description: 'Vehicle created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get()
  @HttpCode(200)
  @HttpCode(404)
  @ApiResponse({ status: 200, description: 'Vehicles found' })
  @ApiResponse({ status: 404, description: 'Vehicles not found' })
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @HttpCode(404)
  @ApiResponse({ status: 200, description: 'Vehicle found' })
  @ApiResponse({ status: 404, description: 'Vehicle not found' })
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(204)
  @HttpCode(404)
  @ApiResponse({ status: 204, description: 'Vehicle updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Vehicle not found' })
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehiclesService.update(id, updateVehicleDto);
  }

  @Delete(':id')
  @HttpCode(204)
  @HttpCode(404)
  @ApiResponse({ status: 204, description: 'Vehicle removed successfully' })
  @ApiResponse({ status: 404, description: 'Vehicle not found' })
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id);
  }
}
