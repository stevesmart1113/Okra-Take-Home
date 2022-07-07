import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ResponseHandler } from 'src/utils/response.handler';
import { UserAuthDTO } from './dto/user.auth.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly responseHandler: ResponseHandler,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Post('auth/login')
  @ApiBody({ type: UserAuthDTO })
  async authenticateUserCredentials(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    var user = await this.userService.searchForMatchingCredentials(
      email,
      password,
    );
    const payload = { username: user.email, sub: user.id };
    if (user === null) {
      return this.responseHandler.buildResponse(
        HttpStatus.UNAUTHORIZED,
        `Invalid credentials provided`,
      );
    } else {
      //var at = this.jwtService.sign(payload);
      return this.responseHandler.buildResponse(
        HttpStatus.OK,
        `User login successful`,
        user,
      );
    }
  }
}
