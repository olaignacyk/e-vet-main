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
import { DoctorsListTableDataSource } from './doctors-list-table-datasource';
import { DoctorsDataService } from '../../services/doctors.data-service';
import { DoctorsListTableItem } from '../../resources/interfaces/doctors-list-table-item.interface';

@Component({
  selector: 'app-owners-list-table',
  templateUrl: './doctors-list-table.component.html',
  styleUrls: ['./doctors-list-table.component.scss'],
})
export class DoctorsListTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DoctorsListTableItem>;
  dataSource: DoctorsListTableDataSource;

  @Output() onOpenDoctorDialog: EventEmitter<number | null> =
    new EventEmitter();

  displayedColumns = ['id', 'name', 'phone', 'workingFrom', 'admin', 'actions'];

  constructor(private doctorsDataService: DoctorsDataService) {
    this.dataSource = new DoctorsListTableDataSource(doctorsDataService);
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
