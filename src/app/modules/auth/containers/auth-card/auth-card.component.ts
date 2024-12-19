import { Component, OnInit } from '@angular/core';
import { AuthState } from '../../modules/auth-state/auth.state';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth-card',
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.scss'],
})
export class AuthCardComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: Observable<boolean>;
  show: boolean;

  constructor(
    private authService: AuthState,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.isLoading = this.authService.isLoadingUser;
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['user@user.com', [Validators.required, Validators.email]],
      password: ['Admin1234!', [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    this.authService.login(this.loginForm.value);
  }
}
