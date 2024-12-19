import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationsComponent } from './reservations.component';
import { ReservationsListComponent } from './containers/reservations-list/reservations-list.component';
import { ReservationDetailsComponent } from './containers/reservation-details/reservation-details.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationsComponent,
    children: [
      { path: '', component: ReservationsListComponent },
      { path: ':id', component: ReservationDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationsRoutingModule {}
