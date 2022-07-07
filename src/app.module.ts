import { Module } from '@nestjs/common';
import { PrismaService } from './common/prisma.service';
import { ResponseHandler } from './utils/response.handler';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { CustomerModule } from './customer/customer.module';
import { IdentityModule } from './identity/identity.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { jwtConstants } from './constants/constants';
import { JwtStrategy } from './stratagies/jwt.stratagy';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    UserModule,
    CustomerModule,
    IdentityModule,
  ],
  controllers: [UserController],
  providers: [PrismaService, ResponseHandler, UserService, JwtService],
})
export class AppModule {}
