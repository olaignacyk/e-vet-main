import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'homepage',
        loadChildren: () =>
          import('./modules/homepage/homepage.module').then(
            (m) => m.HomepageModule
          ),
      },
      {
        path: 'pets',
        loadChildren: () =>
          import('./modules/pets/pets.module').then((m) => m.PetsModule),
      },
      {
        path: 'reservations',
        loadChildren: () =>
          import('./modules/reservations/reservations.module').then(
            (m) => m.ReservationsModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
