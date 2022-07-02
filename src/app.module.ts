import { Module } from '@nestjs/common';
import { PrismaService } from './common/prisma.service';
import { ResponseHandler } from './utils/response.handler';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [PrismaService, ResponseHandler, UserService],
})
export class AppModule {}
