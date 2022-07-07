import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { IdentityService } from './identity.service';
import { CreateIdentityDto } from './dto/create-identity.dto';
import { UpdateIdentityDto } from './dto/update-identity.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ResponseHandler } from 'src/utils/response.handler';
import { BvnSearchDTO } from './dto/bvn.search.dto';
import { JwtService } from '@nestjs/jwt';

@ApiTags('Identity')
@Controller('identity')
export class IdentityController {
  constructor(
    private readonly identityService: IdentityService,
    private readonly responseHandler: ResponseHandler,
  ) {}

  @Post()
  create(@Body() createIdentityDto: CreateIdentityDto) {
    return this.identityService.create(createIdentityDto);
  }

  @Get()
  findAll() {
    return this.identityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.identityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIdentityDto: UpdateIdentityDto,
  ) {
    return this.identityService.update(+id, updateIdentityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.identityService.remove(+id);
  }

  @Post('process')
  @ApiBody({ type: BvnSearchDTO })
  async search(@Body('bvn') bvn: string) {
    var data = await this.identityService.findByBVN(bvn);
    if (data === null) {
      return this.responseHandler.buildResponse(
        HttpStatus.NOT_FOUND,
        `Unable to process identity with BVN number ${bvn}`,
      );
    } else {
      return this.responseHandler.buildResponse(
        HttpStatus.OK,
        'Identity successfully processed',
        data,
      );
    }
  }
}
