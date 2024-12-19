import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors.component';
import { DoctorsListComponent } from './containers/doctors-list/doctors-list.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent,
    children: [{ path: '', component: DoctorsListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
