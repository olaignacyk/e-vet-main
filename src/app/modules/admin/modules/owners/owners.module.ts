import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnersComponent } from './owners.component';
import { OwnersListComponent } from './containers/owners-list/owners-list.component';
import { OwnersListTableComponent } from './containers/owners-list-table/owners-list-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { OwnersDataService } from './services/owners.data-service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from '../shared/shared.module';
import { OwnersState } from './services/owners.state';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OwnersRoutingModule } from './owners-routing.module';

@NgModule({
  declarations: [
    OwnersComponent,
    OwnersListComponent,
    OwnersListTableComponent,
  ],
  imports: [
    CommonModule,
    OwnersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  providers: [OwnersDataService, OwnersState],
})
export class OwnersModule {}
