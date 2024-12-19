import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';
import { ReservationsListComponent } from './containers/reservations-list/reservations-list.component';
import { MatCardModule } from '@angular/material/card';
import { UserModule } from '../../user.module';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReservationsState } from './services/reservations.state';
import { ReservationDetailsComponent } from './containers/reservation-details/reservation-details.component';
import { GlobalSharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    ReservationsComponent,
    ReservationsListComponent,
    ReservationDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    MatCardModule,
    UserModule,
    SharedModule,
    MatProgressSpinnerModule,
    GlobalSharedModule,
  ],
  providers: [ReservationsState],
})
export class ReservationsModule {}
