import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets.component';
import { PetsListComponent } from './containers/pets-list/pets-list.component';
import { PetsDetailsPageComponent } from './containers/pets-details-page/pets-details-page.component';
import { VisitCommentsComponent } from 'src/app/modules/shared/components/visit-comments/visit-comments.component';

const routes: Routes = [
  {
    path: '',
    component: PetsComponent,
    children: [
      { path: '', component: PetsListComponent },
      {
        path: ':id',
        component: PetsDetailsPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
