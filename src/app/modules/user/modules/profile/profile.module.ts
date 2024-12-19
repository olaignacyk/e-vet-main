import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { PetCardComponent } from './containers/pet-card/pet-card.component';
import { ProfileCardComponent } from './containers/profile-card/profile-card.component';

@NgModule({
  declarations: [ProfileComponent, PetCardComponent, ProfileCardComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
  ],
  exports: [PetCardComponent],
})
export class ProfileModule {}
