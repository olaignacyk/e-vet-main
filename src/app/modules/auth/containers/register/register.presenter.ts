import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterPresenter {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  init(): void {
    this.initGenerateForm();
  }

  private initGenerateForm(): void {
    this.registerForm = this.fb.group({
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
    });
  }
}
