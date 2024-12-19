import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets.component';
import { PetsListComponent } from './containers/pets-list/pets-list.component';
import { MatCardModule } from '@angular/material/card';
import { UserModule } from '../../user.module';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PetsState } from './services/pets.state';
import { ProfileModule } from '../profile/profile.module';
import { PetsDetailsPageComponent } from './containers/pets-details-page/pets-details-page.component';
import { PetDetailsComponent } from './components/pet-details/pet-details.component';
import { PetVisitsComponent } from './components/pet-visits/pet-visits.component';
import { PetTreatmentsComponent } from './components/pet-treatments/pet-treatments.component';
import { PetRecommendComponent } from './components/pet-recommend/pet-recommend.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MinutesConvertPipe } from 'src/app/modules/shared/resources/pipes/time-convert.pipe';
import { PetsDataService } from './services/pets-data.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    PetsComponent,
    PetsListComponent,
    PetsDetailsPageComponent,
    PetDetailsComponent,
    PetVisitsComponent,
    PetTreatmentsComponent,
    PetRecommendComponent,
    MinutesConvertPipe,
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    MatCardModule,
    UserModule,
    SharedModule,
    MatProgressSpinnerModule,
    ProfileModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
  ],
  providers: [PetsState, PetsDataService],
})
export class PetsModule {}
