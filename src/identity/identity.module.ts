import { Module } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { IdentityController } from './identity.controller';
import { PrismaService } from 'src/common/prisma.service';
import { ResponseHandler } from 'src/utils/response.handler';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [IdentityController],
  providers: [IdentityService, PrismaService, ResponseHandler, JwtService]
})
export class IdentityModule {}
