import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicinesRoutingModule } from './medicines-routing.module';
import { MedicinesComponent } from './medicines.component';
import { MedicinesListComponent } from './containers/medicines-list/medicines-list.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MedicinesState } from './services/medicines.state';

@NgModule({
  declarations: [MedicinesComponent, MedicinesListComponent],
  imports: [
    CommonModule,
    MedicinesRoutingModule,
    MatCardModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  providers: [MedicinesState],
})
export class MedicinesModule {}
