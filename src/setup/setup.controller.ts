import { Controller, Post } from '@nestjs/common';
import { SetupService } from './setup.service';

@Controller('setup')
export class SetupController {
  constructor(private setUpService: SetupService) {}
  @Post('nigeria')
  setUp() {
    return this.setUpService.setUpCoutryStatesCities();
  }
}
