import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Visit } from '../../resources/interfaces/visit.interface';

@Component({
  selector: 'app-pet-visits',
  templateUrl: './pet-visits.component.html',
  styleUrls: ['./pet-visits.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetVisitsComponent implements AfterViewInit {
  displayedColumns: string[] = ['date', 'diagnosis'];
  @Input() visits: any[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<any>;
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<any>(this.visits);
    this.dataSource.paginator = this.paginator;
  }
}
