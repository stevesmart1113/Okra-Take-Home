import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(private readonly ps: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.ps.user.create({
      data: createUserDto
    });
  }

  findAll() {
    return this.ps.user.findMany();
  }

  findOne(id: number) {
    return this.ps.user.findFirst({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.ps.user.update({
      where: {
        id: id
      }, data: updateUserDto
    });
  }

  remove(id: number) {
    return this.ps.user.delete({where: {id: id}});
  }

  findUserByEmail(email: string) {
     return this.ps.user.findFirst({where: {email: email}})
  }

  async searchForMatchingCredentials(email: string, password: string) {
    return this.ps.user.findFirst(
      {
        where: {
          email: email,
          password: password
        }
      }
    )
  }
}
