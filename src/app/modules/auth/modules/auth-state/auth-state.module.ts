import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthState } from './auth.state';
import { AuthDataService } from '../../resources/services/auth.data-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [AuthState, AuthDataService],
  imports: [CommonModule, HttpClientModule],
})
export class AuthStateModule {}
