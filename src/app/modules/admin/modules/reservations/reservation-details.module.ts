import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReservationDetailsComponent } from './reservation-details.component';
import { ReservationDetailsRoutingModule } from './reservation-details-routing.module';
import { PetsDataService } from '../pets/services/pets.data-service';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalSharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [ReservationDetailsComponent],
  imports: [
    CommonModule,
    GlobalSharedModule,
    SharedModule,
    ReservationDetailsRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [PetsDataService],
})
export class ReservationDetailsModule {}
