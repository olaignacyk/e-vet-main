import { Component, OnInit } from '@angular/core';
import { GenericTableColumnsType } from 'src/app/modules/shared/resources/enums/generic-table-columns-type.enum';
import { GenericTableConfig } from 'src/app/modules/shared/resources/interfaces/generic-table-config.interface';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss'],
})
export class AppointmentsListComponent implements OnInit {
  tableConfig: GenericTableConfig = {
    displayedColumns: [
      {
        label: 'Data',
        field: 'date',
        type: GenericTableColumnsType.DATE,
      },
      {
        label: 'Nazwisko',
        field: 'lastName',
        type: GenericTableColumnsType.TEXT,
      },
      {
        label: 'Numer telefonu',
        field: 'phone',
        type: GenericTableColumnsType.TEXT,
      },
      {
        label: 'Pracuje od',
        field: 'practicingFrom',
        type: GenericTableColumnsType.DATE,
      },
      {
        label: 'Administrator',
        field: 'admin',
        type: GenericTableColumnsType.TOGGLE,
      },
      {
        label: 'Email',
        field: 'email',
        type: GenericTableColumnsType.TEXT,
      },
    ],
    editFields: [],
    newItem: 'Dodaj lekarza',
    editItem: 'Edytuj lekarza',
  };

  constructor() {}

  ngOnInit(): void {}
}
