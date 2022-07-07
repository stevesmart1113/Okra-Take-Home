import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { CreateIdentityDto } from './dto/create-identity.dto';
import { UpdateIdentityDto } from './dto/update-identity.dto';

@Injectable()
export class IdentityService {
  constructor(private readonly ps: PrismaService) {}

  create(createIdentityDto: CreateIdentityDto) {
    return this.ps.identity.create({ data: createIdentityDto });
  }

  findAll() {
    return this.ps.identity.findMany();
  }

  findOne(id: number) {
    return this.ps.identity.findFirst({ where: { id: id } });
  }

  update(id: number, updateIdentityDto: UpdateIdentityDto) {
    return this.ps.identity.update({
      where: { id: id },
      data: updateIdentityDto,
    });
  }

  remove(id: number) {
    return this.ps.identity.delete({ where: { id: id } });
  }

  async findByBVN(bvn: string) {
    return await this.ps.identity.findFirst({ where: { bvn: bvn } });
  }
}
