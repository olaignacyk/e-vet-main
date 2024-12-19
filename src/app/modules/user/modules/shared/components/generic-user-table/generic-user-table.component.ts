import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericUserTableConfig } from '../../resources/interfaces/user-table-config.interface';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { GenericUserDialogComponent } from '../generic-user-dialog/generic-user-dialog.component';
import { GenericTableColumnsType } from 'src/app/modules/shared/resources/enums/generic-table-columns-type.enum';
import { Route, Router } from '@angular/router';
import { GenericAdminDialogComponent } from '../../../../../admin/modules/shared/components/generic-admin-dialog/generic-admin-dialog.component';

@Component({
  selector: 'app-generic-user-table',
  templateUrl: './generic-user-table.component.html',
  styleUrls: ['./generic-user-table.component.scss'],
})
export class GenericUserTableComponent implements OnInit {
  @Input() config: GenericUserTableConfig;
  @Input() data: any[] | null;
  @Input() displayCreate: boolean;

  @Output() dialogCreateRes = new EventEmitter<any>();
  @Output() openDetailsRes = new EventEmitter<any>();

  ColumnType = GenericTableColumnsType;

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}

  get displayedColumns(): string[] {
    return [
      ...this.config.displayedColumns.map((column) => column.field),
      'actions',
    ];
  }

  openDetails(id: number | null): void {
    this.openDetailsRes.next(id);
  }

  openCreateDialog(): void {
    this.dialog
      .open(GenericUserDialogComponent, {
        data: {
          object: null,
          config: this.config.editFields,
          title: this.config.newItem,
        },
        width: '400px',
      })
      .afterClosed()
      .pipe(filter((res) => Boolean(res)))
      .subscribe((res) => this.dialogCreateRes.emit(res));
  }
}
