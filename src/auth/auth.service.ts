import { Injectable } from '@nestjs/common';
import { StaffRegDTO } from './dto/staff-registration-dtos';

@Injectable()
export class AuthService {
  registerStaff(staffData: StaffRegDTO) {
    return staffData;
  }
}
