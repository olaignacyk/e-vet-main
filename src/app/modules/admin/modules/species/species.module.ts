import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species.component';
import { SpeciesListComponent } from './containers/species-list/species-list.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpeciesState } from './services/species.state';
import { SpeciesDataService } from './services/species.data-service';
import { SpecializationsDataService } from '../specializations/services/specializations.data-service';

@NgModule({
  declarations: [SpeciesComponent, SpeciesListComponent],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    MatCardModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  providers: [SpeciesState, SpeciesDataService, SpecializationsDataService],
})
export class SpeciesModule {}
