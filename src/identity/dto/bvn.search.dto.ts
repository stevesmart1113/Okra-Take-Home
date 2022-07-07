import { ApiProperty } from "@nestjs/swagger";

export class BvnSearchDTO {
    @ApiProperty() bvn: string;
}