import { Injectable } from '@nestjs/common';
import { Lga } from 'src/entities/lgas.entity';
import { State } from 'src/entities/states.entity';
import { statesLgas } from 'src/nigeria-states-cities';

@Injectable()
export class SetupService {
  async setUpCoutryStatesCities() {
    Object.keys(statesLgas).map(async (state) => {
      const newState = new State();
      newState.name = state;
      Object.assign(newState, {
        ...statesLgas[state],
        latitude: +statesLgas[state].lat,
        longitude: +statesLgas[state].long,
        lgas: statesLgas[state].lgas.map((lga: string) => {
          const newLga = new Lga();
          newLga.name = lga;
          return newLga;
        }),
      });
      await newState.save();
    });
  }
}
