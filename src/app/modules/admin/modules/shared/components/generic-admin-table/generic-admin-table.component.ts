import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { GenericAdminDialogComponent } from '../generic-admin-dialog/generic-admin-dialog.component';
import { GenericTableColumnsType } from 'src/app/modules/shared/resources/enums/generic-table-columns-type.enum';

@Component({
  selector: 'app-generic-admin-table',
  templateUrl: './generic-admin-table.component.html',
  styleUrls: ['./generic-admin-table.component.scss'],
})
export class GenericAdminTableComponent implements OnInit {
  @Input() config: any;
  @Input() data: any[] | null;
  @Input() displayCreate: boolean;
  @Input() displayEdit: boolean;
  @Input() displayDelete: boolean;
  @Input() displayPreview: boolean;

  @Output() dialogEditRes = new EventEmitter<any>();
  @Output() dialogCreateRes = new EventEmitter<any>();
  @Output() deleteRes = new EventEmitter<string>();
  @Output() previewRes = new EventEmitter<string>();

  ColumnType = GenericTableColumnsType;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  get displayedColumns(): string[] {
    return [
      ...this.config.displayedColumns.map((column: any) => column.field),
      'actions',
    ];
  }

  openEditDialog(id: string): void {
    this.dialog
      .open(GenericAdminDialogComponent, {
        data: {
          id,
          object: this.data!.find((entry) => entry.id === id),
          config: this.config.editFields,
          title: id ? this.config.editItem : this.config.newItem,
        },
        width: '400px',
      })
      .afterClosed()
      .pipe(filter((res) => Boolean(res)))
      .subscribe((res) => this.dialogEditRes.emit(res));
  }

  openCreateDialog(): void {
    this.dialog
      .open(GenericAdminDialogComponent, {
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

  preview(id: string): void {
    this.previewRes.next(id);
  }

  delete(id: string): void {
    this.deleteRes.next(id);
  }
}
