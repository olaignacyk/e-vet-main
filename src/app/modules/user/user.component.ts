import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/modules/shared/resources/interfaces/menu-item.interface';
import { AuthState } from '../auth/modules/auth-state/auth.state';
import { PasswordChangeDialogComponent } from 'src/app/modules/shared/components/password-change-dialog/password-change-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  readonly menuList: MenuItem[] = [
    { label: 'Strona główna', url: 'homepage', icon: 'dashboard' },
    { label: 'Zwierzęta', url: 'pets', icon: 'pets' },
    { label: 'Wizyty', url: 'reservations', icon: 'book' },
  ];
  readonly user = this.authService.user;

  constructor(private authService: AuthState, private dialog: MatDialog) {}

  ngOnInit(): void {}

  passwordChange() {
    this.dialog.open(PasswordChangeDialogComponent);
  }
}
