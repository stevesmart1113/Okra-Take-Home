import { ApiProperty } from "@nestjs/swagger";

export class UserAuthDTO {
    @ApiProperty() email: string;
    @ApiProperty() password: string;
}