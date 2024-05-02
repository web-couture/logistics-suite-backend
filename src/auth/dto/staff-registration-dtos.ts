import {
  IsEmail,
  IsIn,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { StaffRole } from 'src/entities/staff.entity';
import { UserRole } from 'src/entities/users.entity';
import { AddressDTO } from 'src/genaral/dto/address.dto';

export class UserRegDTO {
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(4)
  @MaxLength(15)
  username: string;
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  password: string;
  @IsString()
  @IsIn(Object.values(UserRole))
  role: UserRole;
}

export class OfficePersonnelDTO {
  @IsString()
  @IsUUID()
  stationId: string;
}
export class VehicleAssistantDTO {
  @IsString()
  @IsUUID()
  currentStationId: string;
  @IsString()
  @IsUUID()
  registeredRouteId: string;
}
export class DriverDTO {
  @IsString()
  @IsUUID()
  currentStationId: string;
  @IsString()
  @IsUUID()
  registeredRouteId: string;
}
export class StaffRegDTO {
  user: UserRegDTO;
  @IsString()
  @MinLength(3)
  firstname: string;
  @IsString()
  @MinLength(3)
  lastname: string;
  @IsString()
  @MinLength(3)
  phoneNumber: string;
  address: AddressDTO;
  @IsString()
  @IsIn(Object.values(StaffRole))
  role: StaffRole;
  officePersonnelInfo: OfficePersonnelDTO | null;
  vehicleAssistantInfo: VehicleAssistantDTO | null;
  driverInfo: DriverDTO | null;
}
