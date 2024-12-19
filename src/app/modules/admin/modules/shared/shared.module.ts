import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericAdminTableComponent } from './components/generic-admin-table/generic-admin-table.component';
import { GenericAdminDialogComponent } from './components/generic-admin-dialog/generic-admin-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [GenericAdminTableComponent, GenericAdminDialogComponent],
  exports: [GenericAdminTableComponent, GenericAdminDialogComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
  ],
})
export class SharedModule {}
