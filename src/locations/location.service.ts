import { Inject, Injectable, NotAcceptableException } from '@nestjs/common';
import { LGA_REPOSITORY, STATE_REPOSITORY } from 'src/constants';
import { LGARepoType, StateRepoType } from './location.provider';

@Injectable()
export class LocationsService {
  constructor(
    @Inject(STATE_REPOSITORY) private stateRepository: StateRepoType,
    @Inject(LGA_REPOSITORY) private lgaRepository: LGARepoType,
  ) {}
  async getStates() {
    return await this.stateRepository.getStates();
  }
  async getState(id: number) {
    if (isNaN(id)) throw new NotAcceptableException();
    return await this.stateRepository.getState(id);
  }
  async getLgas(stateId: number) {
    if (isNaN(stateId)) throw new NotAcceptableException();
    return await this.lgaRepository.getLgasByStateId(stateId);
  }
  async getLga(id: number) {
    if (isNaN(id)) throw new NotAcceptableException();
    return await this.lgaRepository.getLga(id);
  }
}
