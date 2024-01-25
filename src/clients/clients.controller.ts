import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Client created successfully' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.OK, description: 'Clients found' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Clients not found' })
  findAll() {
    return this.clientsService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.OK, description: 'Client found' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Client not found' })
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Client updated successfully' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Client not found' })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(id, updateClientDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Client removed successfully' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Client not found' })
  remove(@Param('id') id: string) {
    return this.clientsService.remove(id);
  }
}
