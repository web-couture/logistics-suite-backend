import { Module } from '@nestjs/common';
import { StationsController } from './stations.controller';
import { StationsService } from './stations.service';
import { DatabaseModule } from 'src/database/database.module';
import { stationProvider } from './stations.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [StationsController],
  providers: [stationProvider, StationsService],
})
export class StationsModule {}
