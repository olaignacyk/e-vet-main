import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthState } from '../../modules/auth-state/auth.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading: Observable<boolean>;
  showPassword: boolean;
  showPasswordCheck: boolean;
  personalDetailsForm: FormGroup;
  addressDetailsForm: FormGroup;

  constructor(
    private authService: AuthState,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.isLoading = this.authService.isLoadingRegister;
  }

  ngOnInit(): void {
    this.personalDetailsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
    });

    this.addressDetailsForm = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
    });

    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
            ),
          ],
        ],
        passwordCheck: ['', [Validators.required]],
      },
      {
        validators: this.passwordValidator('password', 'passwordCheck'),
      }
    );
  }

  register() {
    this.authService.register({
      ...this.registerForm.value,
      ...this.addressDetailsForm.value,
      ...this.personalDetailsForm.value,
    });
  }

  passwordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['passwordValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ passwordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
