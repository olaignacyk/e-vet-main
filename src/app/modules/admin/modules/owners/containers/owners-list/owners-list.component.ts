import { Component } from '@angular/core';
import { GenericDialogFieldsType } from 'src/app/modules/shared/resources/enums/generic-dialog-fields-type.enum';
import { GenericTableColumnsType } from 'src/app/modules/shared/resources/enums/generic-table-columns-type.enum';
import { HttpClient } from '@angular/common/http';
import { OwnersState } from '../../services/owners.state';
import { OwnersDataService } from '../../services/owners.data-service';
import { OwnersListTableItem } from '../../resources/interfaces/owners-list-table-item.interface';
import { GenericTableConfig } from 'src/app/modules/shared/resources/interfaces/generic-table-config.interface';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.scss'],
})
export class OwnersListComponent {
  tableConfig: GenericTableConfig = {
    displayedColumns: [
      {
        label: 'Imię',
        field: 'firstName',
        type: GenericTableColumnsType.TEXT,
      },
      {
        label: 'Nazwisko',
        field: 'lastName',
        type: GenericTableColumnsType.TEXT,
      },
      {
        label: 'Adres',
        field: 'address',
        type: GenericTableColumnsType.TEXT,
      },
      {
        label: 'Kod pocztowy',
        field: 'postalCode',
        type: GenericTableColumnsType.TEXT,
      },
      {
        label: 'Miasto',
        field: 'city',
        type: GenericTableColumnsType.TEXT,
      },
      {
        label: 'Numer telefonu',
        field: 'phone',
        type: GenericTableColumnsType.TEXT,
      },
      {
        label: 'Email',
        field: 'email',
        type: GenericTableColumnsType.TEXT,
      },
    ],
    editFields: [
      {
        label: 'ID',
        key: 'id',
        type: GenericDialogFieldsType.HIDDEN,
      },
      {
        label: 'Imię',
        key: 'firstName',
        type: GenericDialogFieldsType.TEXT,
      },
      {
        label: 'Nazwisko',
        key: 'lastName',
        type: GenericDialogFieldsType.TEXT,
      },
      {
        label: 'Adres',
        key: 'address',
        type: GenericDialogFieldsType.TEXT,
      },
      {
        label: 'Kod pocztowy',
        key: 'postalCode',
        type: GenericDialogFieldsType.TEXT,
      },
      {
        label: 'Miasto',
        key: 'city',
        type: GenericDialogFieldsType.TEXT,
      },
      {
        label: 'Numer telefonu',
        key: 'phone',
        type: GenericDialogFieldsType.TEXT,
      },
      {
        label: 'Email',
        key: 'email',
        type: GenericDialogFieldsType.HIDDEN,
      },
    ],
    newItem: 'Dodaj użytkownika',
    editItem: 'Edytuj użytkownika',
  };

  constructor(
    public ownersState: OwnersState,
    private http: HttpClient,
    private dataService: OwnersDataService
  ) {}

  ngOnInit(): void {
    this.ownersState.getOwners();
  }

  onDialogRes(res: OwnersListTableItem): void {
    this.dataService.update(res).subscribe((res) => {
      this.ownersState.getOwners();
    });
  }
}
