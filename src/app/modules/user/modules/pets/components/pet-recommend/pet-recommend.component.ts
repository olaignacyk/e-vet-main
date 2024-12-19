import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Recommendation } from '../../resources/interfaces/recommendation.interface';

@Component({
  selector: 'app-pet-recommend',
  templateUrl: './pet-recommend.component.html',
  styleUrls: ['./pet-recommend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetRecommendComponent implements AfterViewInit {
  displayedColumns: string[] = ['date', 'recommendations'];
  @Input() recommendations: Recommendation[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Recommendation>;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Recommendation>(
      this.recommendations
    );
    this.dataSource.paginator = this.paginator;
  }
}
