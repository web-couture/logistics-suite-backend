import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { LocationsModule } from './locations/location.module';
import { DatabaseModule } from './database/database.module';
import { SetupModule } from './setup/setup.module';
import { StationsModule } from './stations/stations.module';

@Module({
  imports: [
    AuthModule,
    LocationsModule,
    DatabaseModule,
    SetupModule,
    StationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
