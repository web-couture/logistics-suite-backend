import { NotFoundException } from '@nestjs/common';
import { LGA_REPOSITORY, DATA_SOURCE, STATE_REPOSITORY } from 'src/constants';
import { Lga } from 'src/entities/lgas.entity';
import { State } from 'src/entities/states.entity';
import { DataSource, Repository } from 'typeorm';
export type StateRepoType = Repository<State> & {
  getStates(): Promise<State[]>;
  getState(id: number): Promise<State>;
};

export type LGARepoType = Repository<Lga> & {
  getLgasByStateId(stateId: number): Promise<Lga[]>;
  getLga(id: number): Promise<Lga>;
};

export const locationProviders = [
  {
    provide: STATE_REPOSITORY,
    useFactory: (dataSource: DataSource): StateRepoType =>
      dataSource.getRepository(State).extend({
        async getStates() {
          return await this.find();
        },
        async getState(id: number) {
          const state = await this.findOne({ where: { id } });
          if (!state) throw new NotFoundException('state not found');
          return state;
        },
      }),
    inject: [DATA_SOURCE],
  },
  {
    provide: LGA_REPOSITORY,
    useFactory: (dataSource: DataSource): LGARepoType =>
      dataSource.getRepository(Lga).extend({
        async getLgasByStateId(stateId: number) {
          return this.find({
            where: {
              stateId,
            },
          });
        },
        async getLga(id: number) {
          const city = this.find({ where: { id } });
          if (!city) throw new NotFoundException('city not found');
          return city;
        },
      }),
    inject: [DATA_SOURCE],
  },
];
