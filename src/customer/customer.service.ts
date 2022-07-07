import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private readonly ps: PrismaService) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.ps.customer.create({ data: createCustomerDto });
  }

  findAll() {
   /*  const sk = (skip - 1) * take;
    const tk = take; */
    return this.ps.customer.findMany({
      include: {
        customerGeoLocation: false,
      },
      /* skip: sk,
      take: tk */
    });
  }

  findOne(id: any) {
    return this.ps.customer.findFirst({
      where: { customerId: id },
      include: { customerGeoLocation: true },
      orderBy: [
        {
          dateCreated: 'desc'
        }
      ]
    });
  }

  update(id: any, data: UpdateCustomerDto) {
    return this.ps.customer.update({
      where: { id: id },
      data: data,
    });
  }

  remove(id: number) {
    return this.ps.customer.delete({ where: { id: id } });
  }

  async findCustomerByFirstName(firstName: string) {
    if (firstName !== null) {
      return this.ps.customer.findMany({
        where: {
          firstName: {
            contains: firstName,
            mode: 'insensitive'
          }
        },
        orderBy: [
          {
            dateCreated: 'desc'
          }
        ]
      });
    } else {
      return this.ps.customer.findMany();
    }
  }
}
