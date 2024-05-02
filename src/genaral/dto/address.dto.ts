import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class AddressDTO {
  @IsString()
  @MinLength(10)
  streetAddress: string;
  @IsNumber()
  stateId: number;
  @IsOptional()
  @IsNumber()
  cityId: number | null;
}
