import { ApiProperty } from "@nestjs/swagger";
import { CustomerGeoLocation } from "@prisma/client";

export class CreateCustomerDto {
    @ApiProperty() customerId: string;
    @ApiProperty() firstName: string;
    @ApiProperty() lastName: string;
    @ApiProperty() email: string;
    @ApiProperty() password: string;
    @ApiProperty() active: boolean;
    @ApiProperty() country: string;
    @ApiProperty() phone: string;
    @ApiProperty() customerGeoLocation: CustomerGeoLocation;
    @ApiProperty() dateCreated: Date;
    @ApiProperty() dateUpdated: Date;
}
