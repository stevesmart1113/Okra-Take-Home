import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty() firstName: string;
    @ApiProperty() lastName: string;
    @ApiProperty() email: string;
    @ApiProperty() password: string;
    @ApiProperty() active: boolean;
    @ApiProperty() dateCreated: Date;
    @ApiProperty() dateUpdated: Date;
}
