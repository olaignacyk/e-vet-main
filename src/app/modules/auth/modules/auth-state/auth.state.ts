import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from 'src/app/modules/shared/services/token.service';
import { LoginForm } from 'src/app/modules/shared/resources/interfaces/login-form.interface';
import { RegisterForm } from 'src/app/modules/shared/resources/interfaces/register-form.interface';
import { AuthDataService } from '../../resources/services/auth.data-service';
import { Router } from '@angular/router';
import { UserToken } from 'src/app/modules/shared/resources/interfaces/user-token.interface';
import { Role } from 'src/app/modules/shared/resources/enums/role.enum';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AuthState {
  isLoadingUser = new BehaviorSubject(false);
  isLoadingRegister = new BehaviorSubject(false);
  user = new BehaviorSubject<UserToken | null>(null);
  token = new BehaviorSubject<any>(null);
  userId = new BehaviorSubject<string>('');

  constructor(
    private tokenService: TokenService,
    private dataService: AuthDataService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.syncStorageData();
  }

  login(credentials: LoginForm): void {
    this.isLoadingUser.next(true);

    this.dataService.login(credentials).subscribe({
      next: (res) => {
        this.tokenService.setTokens(res);

        const user: UserToken = this.tokenService.decodeToken(res.token);
        console.error(user);
        this.userId.next(user.userId);
        this.user.next(user);
        this.token.next({ token: res.token });
        this.openCorrectPanel(user.role);
      },
      error: (res) => {
        this.isLoadingUser.next(false);
        this.snackBar.open(res.message, undefined, {
          duration: 2000,
        });
      },
      complete: () => {
        this.isLoadingUser.next(false);
      },
    });
  }

  register(credentials: RegisterForm): void {
    this.isLoadingRegister.next(true);

    this.dataService.register(credentials).subscribe({
      next: (res) => {
        this.tokenService.setTokens(res);

        const user: UserToken = this.tokenService.decodeToken(res.token);
        this.user.next(user);
        this.token.next({ token: res.token });
        this.router.navigate(['user']);
      },
      error: (res) => {
        this.isLoadingRegister.next(false);
      },
      complete: () => {
        this.isLoadingRegister.next(false);
      },
    });
  }

  private syncStorageData(): void {
    const storageData = this.tokenService.getStorageData();

    if (storageData && storageData.user) {
      console.warn(storageData);
      this.user.next(storageData.user);
      this.token.next({ token: storageData.token });
    }
  }

  private openCorrectPanel(role: Role[]): void {
    this.router.navigate([
      role.includes(Role.Doctor) || role.includes(Role.Admin)
        ? 'admin'
        : 'user',
    ]);
  }
}
