import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets.component';
import { PetsListComponent } from './containers/pets-list/pets-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PetsDataService } from './services/pets.data-service';

@NgModule({
  declarations: [PetsComponent, PetsListComponent],
  imports: [
    CommonModule,
    PetsRoutingModule,
    SharedModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [PetsDataService],
})
export class PetsModule {}
