import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Treatment } from '../../resources/interfaces/treatment.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-treatments',
  templateUrl: './pet-treatments.component.html',
  styleUrls: ['./pet-treatments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetTreatmentsComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'description', 'date'];
  @Input() treatments: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Treatment>;

  constructor(private router: Router) {}
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Treatment>(this.treatments);
    this.dataSource.paginator = this.paginator;
  }
}
