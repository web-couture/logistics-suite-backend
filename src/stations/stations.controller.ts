import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StationsService } from './stations.service';
import { AddStationDTO } from './dto/add-station.dto';

@Controller('stations')
export class StationsController {
  constructor(private stationsService: StationsService) {}
  @Get()
  getStations() {
    return this.stationsService.getStations;
  }
  @Post()
  @UsePipes(ValidationPipe)
  addStation(@Body() stationData: AddStationDTO) {
    return this.stationsService.addStation(stationData);
  }
  @Get(':name')
  getStationByName(@Param('name') name: string) {
    return this.stationsService.getStationByName(name);
  }
}
