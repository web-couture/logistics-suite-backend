import { Module } from '@nestjs/common';
import { LocationsService } from './location.service';
import { LocationsController } from './location.controller';
import { locationProviders } from './location.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...locationProviders, LocationsService],
  controllers: [LocationsController],
})
export class LocationsModule {}
