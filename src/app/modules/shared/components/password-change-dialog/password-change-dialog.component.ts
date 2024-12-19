import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-password-change-dialog',
  templateUrl: './password-change-dialog.component.html',
  styleUrls: ['./password-change-dialog.component.scss'],
})
export class PasswordChangeDialogComponent implements OnInit {
  showPassword: boolean = false;
  showNewPassword: boolean = false;
  showNewPasswordConfirm: boolean = false;
  passwordChangeForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.passwordChangeForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}'
          ),
        ],
      ],
      newPasswordConfirm: ['', [Validators.required, this.PasswordMatch()]],
    });
  }
  PasswordMatch(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent) {
        return null;
      }
      let form = control.parent.value;
      if (
        form.newPassword != form.newPasswordConfirm &&
        form.newPasswordConfirm != '' &&
        form.newPassword != ''
      ) {
        return { passwordMatch: true };
      }
      return null;
    };
  }
}
