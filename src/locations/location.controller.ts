import { Controller, Get, Param, Query } from '@nestjs/common';
import { LocationsService } from './location.service';

@Controller('locations')
export class LocationsController {
  constructor(private locationService: LocationsService) {}
  @Get('states')
  getAllStates() {
    return this.locationService.getStates();
  }

  @Get('states/:stateId')
  getState(@Param('stateId') stateId: string) {
    const id = +stateId;
    return this.locationService.getState(id);
  }

  @Get('states/:stateId/lgas')
  getStateCities(@Param('stateId') stateId: string) {
    return this.locationService.getLgas(+stateId);
  }
  @Get('lga')
  getCity(@Query('id') id: string) {
    return this.locationService.getLga(+id);
  }
}
