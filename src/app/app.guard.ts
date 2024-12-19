import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { TokenService } from 'src/app/modules/shared/services/token.service';
import { AuthState } from './modules/auth/modules/auth-state/auth.state';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate, CanActivateChild {
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private authState: AuthState
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let redirect = (path: [any]) => this.router.createUrlTree(path);
    // return this.authState.user.pipe(
    //   switchMap((user) => {
    //     const token = this.tokenService.getToken();
    //     const pathPrefix = state.url.split('/')[1];
    //     if (!token || moment().isAfter(moment(token.expirationDate))) {
    //       return of(pathPrefix !== 'auth' ? redirect(['auth']) : true);
    //     } else {
    //       if (user.isAdmin && pathPrefix !== 'admin')
    //         return of(redirect(['admin']));
    //       if (!user.isAdmin && pathPrefix !== 'user')
    //         return of(redirect(['user']));
    //     }
    return of(true);
    // })
    // );
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate(childRoute, state);
  }
}
