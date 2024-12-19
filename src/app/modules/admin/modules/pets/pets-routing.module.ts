import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets.component';
import { PetsListComponent } from './containers/pets-list/pets-list.component';

const routes: Routes = [
  {
    path: '',
    component: PetsComponent,
    children: [{ path: '', component: PetsListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
