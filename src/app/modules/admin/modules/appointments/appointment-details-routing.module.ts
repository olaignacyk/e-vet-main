import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentDetailsComponent } from './appointment-details.component';
import { AppointmentsListComponent } from './containers/appointments-list/appointments-list.component';
import { AppointmentPreviewComponent } from './containers/appointment-preview/appointment-preview.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentDetailsComponent,
    children: [
      { path: '', component: AppointmentsListComponent },
      { path: ':id', component: AppointmentPreviewComponent },
    ],
    // children: [{ path: '', component:  }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentDetailsRoutingModule {}
