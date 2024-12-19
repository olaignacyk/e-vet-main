import { Component, OnInit } from '@angular/core';
import { AuthState } from '../auth/modules/auth-state/auth.state';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/modules/shared/resources/interfaces/menu-item.interface';
import { UserToken } from 'src/app/modules/shared/resources/interfaces/user-token.interface';
import { MatDialog } from '@angular/material/dialog';
import { PasswordChangeDialogComponent } from 'src/app/modules/shared/components/password-change-dialog/password-change-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  readonly menuList: MenuItem[] = [
    { label: 'Tablica', url: 'dashboard', icon: 'dashboard' },
    { label: 'Harmonogram', url: 'schedule', icon: 'date_range' },
    { label: 'Lekarze', url: 'doctors', icon: 'group' },
    { label: 'Zwierzęta', url: 'pets', icon: 'pets' },
    { label: 'Gatunki', url: 'species', icon: 'type_specimen' },
    { label: 'Lekarstwa', url: 'medicines', icon: 'vaccines' },
    { label: 'Użytkownicy', url: 'owners', icon: 'group' },
    { label: 'Specjalizacje', url: 'specializations', icon: 'extension' },
  ];

  user: Observable<UserToken | null>;

  constructor(private authState: AuthState, private dialog: MatDialog) {
    this.user = this.authState.user;
  }

  ngOnInit(): void {}

  passwordChange() {
    this.dialog.open(PasswordChangeDialogComponent);
  }
}
