import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthCardComponent } from './containers/auth-card/auth-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PasswordRecoveryComponent } from './containers/password-recovery/password-recovery.component';
import { RegisterComponent } from './containers/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthDataService } from './resources/services/auth.data-service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { AuthStateModule } from './modules/auth-state/auth-state.module';

@NgModule({
  declarations: [
    AuthComponent,
    AuthCardComponent,
    PasswordRecoveryComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    AuthStateModule,
  ],
  providers: [AuthDataService],
})
export class AuthModule {}
