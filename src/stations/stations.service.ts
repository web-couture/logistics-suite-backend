import { Inject, Injectable } from '@nestjs/common';
import { AddStationDTO } from './dto/add-station.dto';
import { STATIONS_REPOSITORY } from 'src/constants';
import { StationsRepoType } from './stations.provider';

@Injectable()
export class StationsService {
  constructor(
    @Inject(STATIONS_REPOSITORY) private stationsRepo: StationsRepoType,
  ) {}
  async addStation(stationData: AddStationDTO) {
    return await this.stationsRepo.addStation(stationData);
  }
  async getStations() {
    return await this.stationsRepo.getStations();
  }
  async getStationByName(name: string) {
    return await this.stationsRepo.getStationByName(name);
  }
}
