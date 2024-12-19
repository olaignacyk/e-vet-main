import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthState } from '../../auth/modules/auth-state/auth.state';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private authState: AuthState) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.authState.token.value
      ? this.authState.token.value.token
      : null;

    if (token) {
      return next.handle(
        request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + token),
        })
      );
    }

    return next.handle(request);
  }
}
