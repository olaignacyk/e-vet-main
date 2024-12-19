import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from './modules/shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { UserRoutingModule } from './user-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { AuthStateModule } from '../auth/modules/auth-state/auth-state.module';
import { UserGuard } from './user.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../core/interceptors/request.interceptor';
@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    UserRoutingModule,
    MatButtonModule,
    AuthStateModule,
  ],
  providers: [
    UserGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
})
export class UserModule {}
