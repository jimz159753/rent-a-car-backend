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
import { RentsService } from './rents.service';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Rents')
@Controller('rents')
export class RentsController {
  constructor(private readonly rentsService: RentsService) { }

  @Post()
  @HttpCode(201)
  @HttpCode(400)
  @ApiResponse({ status: 201, description: 'Rent created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createRentDto: CreateRentDto) {
    return this.rentsService.create(createRentDto);
  }

  @Get()
  @HttpCode(200)
  @HttpCode(404)
  @ApiResponse({ status: 200, description: 'Rents found' })
  @ApiResponse({ status: 404, description: 'Rents not found' })
  findAll() {
    return this.rentsService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  @HttpCode(404)
  @ApiResponse({ status: 200, description: 'Rent found' })
  @ApiResponse({ status: 404, description: 'Rent not found' })
  findOne(@Param('id') id: string) {
    return this.rentsService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(204)
  @HttpCode(404)
  @ApiResponse({ status: 204, description: 'Rent updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Rent not found' })
  update(@Param('id') id: string, @Body() updateRentDto: UpdateRentDto) {
    return this.rentsService.update(id, updateRentDto);
  }

  @Delete(':id')
  @HttpCode(204)
  @HttpCode(404)
  @ApiResponse({ status: 204, description: 'Rent removed successfully' })
  @ApiResponse({ status: 404, description: 'Rent not found' })
  remove(@Param('id') id: string) {
    return this.rentsService.remove(id);
  }
}
