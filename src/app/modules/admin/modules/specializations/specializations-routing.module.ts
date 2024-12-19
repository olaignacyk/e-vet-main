import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpecializationsListComponent } from './containers/specializations-list/specializations-list.component';
import { SpecializationsComponent } from './specializations.component';

const routes: Routes = [
  {
    path: '',
    component: SpecializationsComponent,
    children: [{ path: '', component: SpecializationsListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeciesRoutingModule {}
