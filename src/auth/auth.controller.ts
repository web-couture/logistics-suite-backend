import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StaffRegDTO } from './dto/staff-registration-dtos';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('staff-registration')
  @UsePipes(ValidationPipe)
  signup(@Body() staffData: StaffRegDTO) {
    console.log(staffData);

    return this.authService.registerStaff(staffData);
  }
}
