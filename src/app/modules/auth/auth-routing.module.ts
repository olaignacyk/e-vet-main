import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordRecoveryComponent } from './containers/password-recovery/password-recovery.component';
import { AuthCardComponent } from './containers/auth-card/auth-card.component';
import { RegisterComponent } from './containers/register/register.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', component: AuthCardComponent },
      { path: 'recovery', component: PasswordRecoveryComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
