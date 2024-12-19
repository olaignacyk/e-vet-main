import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PetsDataService } from '../pets/services/pets.data-service';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentDetailsComponent } from './appointment-details.component';
import { AppointmentDetailsRoutingModule } from './appointment-details-routing.module';
import { AppointmentsListComponent } from './containers/appointments-list/appointments-list.component';
import { AppointmentPreviewComponent } from './containers/appointment-preview/appointment-preview.component';

@NgModule({
  declarations: [AppointmentDetailsComponent, AppointmentsListComponent, AppointmentPreviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AppointmentDetailsRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [PetsDataService],
})
export class AppointmentDetailsModule {}
