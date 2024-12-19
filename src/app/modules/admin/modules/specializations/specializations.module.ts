import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpecializationsListComponent } from './containers/specializations-list/specializations-list.component';
import { SpecializationsComponent } from './specializations.component';
import { RouterModule } from '@angular/router';
import { SpeciesRoutingModule } from './specializations-routing.module';
import { SpecializationsState } from './services/specializations.state';
import { SpecializationsDataService } from './services/specializations.data-service';

@NgModule({
  declarations: [SpecializationsListComponent, SpecializationsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    MatProgressSpinnerModule,
    RouterModule,
    SpeciesRoutingModule,
  ],
  providers: [SpecializationsState, SpecializationsDataService],
})
export class SpecializationsModule {}
