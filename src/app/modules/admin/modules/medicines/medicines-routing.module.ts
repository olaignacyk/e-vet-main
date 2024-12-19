import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicinesComponent } from './medicines.component';
import { MedicinesListComponent } from './containers/medicines-list/medicines-list.component';

const routes: Routes = [
  {
    path: '',
    component: MedicinesComponent,
    children: [{ path: '', component: MedicinesListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicinesRoutingModule {}
