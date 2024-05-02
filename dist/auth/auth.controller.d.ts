import { StaffRegDTO } from './dto/staff-registration-dtos';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(staffData: StaffRegDTO): StaffRegDTO;
}
