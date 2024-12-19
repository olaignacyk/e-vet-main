import { Component } from '@angular/core';
import { GenericDialogFieldsType } from 'src/app/modules/shared/resources/enums/generic-dialog-fields-type.enum';
import { GenericTableColumnsType } from 'src/app/modules/shared/resources/enums/generic-table-columns-type.enum';
import { DoctorsState } from '../../services/doctors.state';
import { DoctorsListTableItem } from '../../resources/interfaces/doctors-list-table-item.interface';
import { DoctorsDataService } from '../../services/doctors.data-service';
import { GenericTableConfig } from 'src/app/modules/shared/resources/interfaces/generic-table-config.interface';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss'],
})
export class DoctorsListComponent {
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
        label: 'Email',
        key: 'email',
        type: GenericDialogFieldsType.TEXT,
      },
      {
        label: 'Hasło',
        key: 'password',
        type: GenericDialogFieldsType.TEXT,
      },
      {
        label: 'Numer telefonu',
        key: 'phone',
        type: GenericDialogFieldsType.TEXT,
      },
      {
        label: 'Pracuje od',
        key: 'practicingFrom',
        type: GenericDialogFieldsType.DATE,
      },
      {
        label: 'Administrator',
        key: 'adminPrivileges',
        type: GenericDialogFieldsType.TOGGLE,
      },
    ],
    newItem: 'Dodaj lekarza',
    editItem: 'Edytuj lekarza',
  };

  constructor(
    public doctorsState: DoctorsState,
    private dataService: DoctorsDataService
  ) {}

  ngOnInit(): void {
    this.doctorsState.getDoctors();
  }

  onUpdateRes(res: DoctorsListTableItem): void {
    this.dataService.update(res).subscribe((res) => {
      this.doctorsState.getDoctors();
    });
  }

  onCreateRes(res: DoctorsListTableItem): void {
    this.dataService.create(res).subscribe((res) => {
      this.doctorsState.getDoctors();
    });
  }

  onDeleteRes(id: string): void {
    this.dataService.delete(id).subscribe((res) => {
      this.doctorsState.getDoctors();
    });
  }
}
