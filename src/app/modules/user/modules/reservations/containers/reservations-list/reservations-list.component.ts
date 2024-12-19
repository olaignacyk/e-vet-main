import { Component, OnInit } from '@angular/core';
import { GenericUserTableConfig } from '../../../shared/resources/interfaces/user-table-config.interface';
import { GenericDialogFieldsType } from 'src/app/modules/shared/resources/enums/generic-dialog-fields-type.enum';
import { GenericTableColumnsType } from 'src/app/modules/shared/resources/enums/generic-table-columns-type.enum';
import { ReservationsState } from '../../services/reservations.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.scss'],
})
export class ReservationsListComponent implements OnInit {
  tableConfig: GenericUserTableConfig = {
    displayedColumns: [
      {
        label: 'Zwierzak',
        field: 'name',
        type: GenericTableColumnsType.TEXT,
      },
      {
        label: 'Data wizyty',
        field: 'date',
        type: GenericTableColumnsType.DATE,
      },
      {
        label: 'Diagnoza',
        field: 'diagnosis',
        type: GenericTableColumnsType.TEXT,
      },
    ],
    editFields: [
      { label: 'Zwierzak', key: 'name', type: GenericDialogFieldsType.TEXT },
      { label: 'Lekarz', key: 'doctor', type: GenericDialogFieldsType.TEXT },
      { label: 'Termin', key: 'visitDate', type: GenericDialogFieldsType.DATE },
    ],
    newItem: '',
    editItem: '',
  };

  constructor(
    public reservationsState: ReservationsState,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reservationsState.getReservations();
  }

  onOpenDetailsRes(id: any): void {
    this.router.navigate(['/user/reservations/', id]);
  }
}
