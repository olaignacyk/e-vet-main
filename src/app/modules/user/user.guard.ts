import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthState } from '../auth/modules/auth-state/auth.state';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private authState: AuthState, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return of(true);
    // return this.authState.user.pipe(
    //   switchMap((user) =>
    //     of(
    //       user.tokenExpirationDate?.isAfter(moment())
    //         ? true
    //         : this.router.createUrlTree(['auth'])
    //     )
    //   )
    // );
  }
}
