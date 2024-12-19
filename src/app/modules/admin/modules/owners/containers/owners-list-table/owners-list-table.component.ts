import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { OwnersListTableItem } from '../../resources/interfaces/owners-list-table-item.interface';
import { OwnersDataService } from '../../services/owners.data-service';
import { OwnersListTableDataSource } from './owners-list-table-datasource';

@Component({
  selector: 'app-owners-list-table',
  templateUrl: './owners-list-table.component.html',
  styleUrls: ['./owners-list-table.component.scss'],
})
export class OwnersListTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<OwnersListTableItem>;
  dataSource: OwnersListTableDataSource;

  @Output() onOpenDoctorDialog: EventEmitter<number | null> =
    new EventEmitter();

  displayedColumns = ['id', 'name', 'phone', 'workingFrom', 'admin', 'actions'];

  constructor(private ownersDataService: OwnersDataService) {
    this.dataSource = new OwnersListTableDataSource(ownersDataService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  emitDoctorDialog(id: number | null): void {
    this.onOpenDoctorDialog.next(id);
  }
}
