import { Component, OnInit } from '@angular/core';
import { GenericDialogFieldsType } from 'src/app/modules/shared/resources/enums/generic-dialog-fields-type.enum';
import { GenericTableColumnsType } from 'src/app/modules/shared/resources/enums/generic-table-columns-type.enum';
import { MedicinesState } from '../../services/medicines.state';
import { MedicinesDataService } from '../../services/medicines.data-service';
import { GenericTableConfig } from 'src/app/modules/shared/resources/interfaces/generic-table-config.interface';

@Component({
  selector: 'app-medicines-list',
  templateUrl: './medicines-list.component.html',
  styleUrls: ['./medicines-list.component.scss'],
})
export class MedicinesListComponent implements OnInit {
  tableConfig: GenericTableConfig = {
    displayedColumns: [
      { label: 'Id', field: 'id', type: GenericTableColumnsType.NUMBER },
      { label: 'Nazwa', field: 'name', type: GenericTableColumnsType.TEXT },
    ],
    editFields: [
      { label: 'Id', key: 'id', type: GenericDialogFieldsType.HIDDEN },
      { label: 'Nazwa', key: 'name', type: GenericDialogFieldsType.TEXT },
    ],
    newItem: 'Dodaj lekarstwo',
    editItem: 'Edytuj lekarstwo',
  };

  constructor(
    public medicinesState: MedicinesState,
    private dataService: MedicinesDataService
  ) {}

  ngOnInit(): void {
    this.medicinesState.getMedicines();
  }

  createMedicine(payload: any): void {
    this.dataService.createMedicine(payload.name).subscribe((res) => {
      this.medicinesState.getMedicines();
    });
  }

  editMedicine(payload: any): void {
    this.dataService.updateMedicine(payload).subscribe((res) => {
      this.medicinesState.getMedicines();
    });
  }
}
