import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersComponent } from './owners.component';
import { OwnersListComponent } from './containers/owners-list/owners-list.component';

const routes: Routes = [
  {
    path: '',
    component: OwnersComponent,
    children: [{ path: '', component: OwnersListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnersRoutingModule {}
