import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { AddressDTO } from 'src/genaral/dto/address.dto';

export class AddStationDTO {
  @IsString()
  @MinLength(4)
  name: string;
  @IsString()
  @MinLength(2)
  @MaxLength(5)
  code: string;
  address: AddressDTO;
  @IsBoolean()
  isRegional: boolean;
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  phoneNumbers: string[];
}
