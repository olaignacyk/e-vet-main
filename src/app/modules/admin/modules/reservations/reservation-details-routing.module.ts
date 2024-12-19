import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationDetailsComponent } from './reservation-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: ReservationDetailsComponent,
    // children: [{ path: '', component:  }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationDetailsRoutingModule {}
