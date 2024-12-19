import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'medicines',
        loadChildren: () =>
          import('./modules/medicines/medicines.module').then(
            (m) => m.MedicinesModule
          ),
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('./modules/schedule/schedule.module').then(
            (m) => m.ScheduleModule
          ),
      },
      {
        path: 'pets',
        loadChildren: () =>
          import('./modules/pets/pets.module').then((m) => m.PetsModule),
      },
      {
        path: 'doctors',
        loadChildren: () =>
          import('./modules/doctors/doctors.module').then(
            (m) => m.DoctorsModule
          ),
      },
      {
        path: 'species',
        loadChildren: () =>
          import('./modules/species/species.module').then(
            (m) => m.SpeciesModule
          ),
      },
      {
        path: 'owners',
        loadChildren: () =>
          import('./modules/owners/owners.module').then((m) => m.OwnersModule),
      },
      {
        path: 'specializations',
        loadChildren: () =>
          import('./modules/specializations/specializations.module').then(
            (m) => m.SpecializationsModule
          ),
      },
      {
        path: 'reservations',
        loadChildren: () =>
          import('./modules/reservations/reservation-details.module').then(
            (m) => m.ReservationDetailsModule
          ),
      },
      {
        path: 'appointments',
        loadChildren: () =>
          import('./modules/appointments/appointment-details.module').then(
            (m) => m.AppointmentDetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
