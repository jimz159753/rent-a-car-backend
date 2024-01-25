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
} from '@nestjs/common';
import { RentsService } from './rents.service';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Rents')
@Controller('rents')
export class RentsController {
  constructor(private readonly rentsService: RentsService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Rent created successfully' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  create(@Body() createRentDto: CreateRentDto) {
    return this.rentsService.create(createRentDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.OK, description: 'Rents found' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Rents not found' })
  findAll() {
    return this.rentsService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.OK, description: 'Rent found' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Rent not found' })
  findOne(@Param('id') id: string) {
    return this.rentsService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Rent updated successfully' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Rent not found' })
  update(@Param('id') id: string, @Body() updateRentDto: UpdateRentDto) {
    return this.rentsService.update(id, updateRentDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Rent removed successfully' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Rent not found' })
  remove(@Param('id') id: string) {
    return this.rentsService.remove(id);
  }
}
