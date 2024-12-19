import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from 'src/app/modules/shared/resources/interfaces/login-form.interface';
import { Observable, of } from 'rxjs';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { LoginResponse } from '../interfaces/login-response.interface';
import { RegisterForm } from 'src/app/modules/shared/resources/interfaces/register-form.interface';

@Injectable()
export class AuthDataService {
  constructor(private http: HttpClient) {}

  login(credentials: LoginForm): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(apiUrl + 'users/login', credentials);
  }
  register(credentials: RegisterForm): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(apiUrl + 'owners', credentials);
  }
}
