import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UpdatePasswordAuthDto } from './dto/update-password-auth.dto';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @HttpCode(HttpStatus.BAD_REQUEST)
  @ApiResponse({ status: HttpStatus.CREATED, description: 'User created successfully' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad request' })
  @Post('register')
  registerUser(@Body() registerAuthDto: RegisterAuthDto) {
    return this.authService.register(registerAuthDto)
  }

  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: ' User logged in successfully' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Bad request' })
  @Post('login')
  async loginUser(@Body() loginAuthDto: LoginAuthDto, @Res({ passthrough: true }) response) {
    const res = await this.authService.login(loginAuthDto)
    response.cookie('token', res.token)
    return res
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('logout')
  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.OK, description: 'User logout successfully' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Error' })
  logoutUser(@Res({ passthrough: true }) response) {
    response.clearCookie('token')
    return this.authService.logoutUser();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.ACCEPTED)
  @HttpCode(HttpStatus.NOT_FOUND)
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: ' User password updated successfully' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Bad request' })
  @Patch('update/password/:id')
  updatePassword(@Param('id') id: string, @Body() updatePasswordAuthDto: UpdatePasswordAuthDto) {
    return this.authService.updatePassword(id, updatePasswordAuthDto)
  }
}
