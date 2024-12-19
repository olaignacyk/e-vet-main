import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesComponent } from './species.component';
import { SpeciesListComponent } from './containers/species-list/species-list.component';

const routes: Routes = [
  {
    path: '',
    component: SpeciesComponent,
    children: [{ path: '', component: SpeciesListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeciesRoutingModule {}
