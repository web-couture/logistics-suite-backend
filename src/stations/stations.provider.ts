import { DATA_SOURCE, STATIONS_REPOSITORY } from 'src/constants';
import { Station } from 'src/entities/stations.entity';
import { DataSource, Repository } from 'typeorm';
import { AddStationDTO } from './dto/add-station.dto';
import { Address } from 'src/entities/address.entity';
import { NotFoundException } from '@nestjs/common';

export type StationsRepoType = Repository<Station> & {
  addStation(stationData: AddStationDTO): Promise<Station>;
  getStations(): Promise<Station[]>;
  getStationByName(name: string): Promise<Station[]>;
};

export const stationProvider = {
  provide: STATIONS_REPOSITORY,
  useFactory: (datasource: DataSource): StationsRepoType =>
    datasource.getRepository(Station).extend({
      async addStation(stationData) {
        const station = new Station();
        station.name = stationData.name;
        station.code = stationData.code;
        station.phoneNumbers = stationData.phoneNumbers;
        station.isRegional = stationData.isRegional;
        const address = new Address();
        Object.assign(address, stationData.address);
        await station.save();
        return station;
      },
      async getStations() {
        return await this.find();
      },
      async getStationByName(name) {
        const station = await this.findOne({ where: { name } });
        if (!station) throw new NotFoundException('Station not found');
        return station;
      },
    }),
  inject: [DATA_SOURCE],
};
