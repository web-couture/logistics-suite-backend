import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';

@Module({
  providers: [StatesService],
  controllers: [StatesController]
})
export class StatesModule {}
