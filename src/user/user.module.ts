import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/common/prisma.service';
import { ResponseHandler } from 'src/utils/response.handler';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/stratagies/jwt.stratagy';
import { jwtConstants } from 'src/constants/constants';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    })
  ],
  controllers: [UserController],
  providers: [UserService, PrismaService, ResponseHandler, JwtService]
})
export class UserModule {}
