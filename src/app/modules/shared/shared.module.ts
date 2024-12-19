import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from '../../app.component';
import { VisitCommentsComponent } from 'src/app/modules/shared/components/visit-comments/visit-comments.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VisitDetailsComponent } from './components/visit-details/visit-details.component';
import { VisitDetailsCardComponent } from './components/visit-details-card/visit-details-card.component';
import { PetDetailsCardComponent } from './components/pet-details-card/pet-details-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../admin/modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    VisitCommentsComponent,
    VisitDetailsComponent,
    VisitDetailsCardComponent,
    PetDetailsCardComponent,
  ],
  exports: [
    VisitDetailsCardComponent,
    PetDetailsCardComponent,
    VisitCommentsComponent,
  ],
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class GlobalSharedModule {}
