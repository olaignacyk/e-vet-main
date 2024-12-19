import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // return next.handle(request).pipe( tap(() => {},
    //   (err: any) => {
    //     if (err instanceof HttpErrorResponse) {
    //       if (err.status !== 401) {
    //         return;
    //       }
    //       this.router.navigate(['login']);
    //     }
    //   }));
    console.log(request);
    return next.handle(request);
  }
}
