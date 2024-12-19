import { Component, OnInit } from '@angular/core';
import { SpecializationsState } from '../../services/specializations.state';
import { GenericTableColumnsType } from 'src/app/modules/shared/resources/enums/generic-table-columns-type.enum';
import { GenericDialogFieldsType } from 'src/app/modules/shared/resources/enums/generic-dialog-fields-type.enum';
import { SpecializationsDataService } from '../../services/specializations.data-service';
import { Specializaton } from '../../resources/interfaces/specializaton.interface';
import { GenericTableConfig } from 'src/app/modules/shared/resources/interfaces/generic-table-config.interface';

@Component({
  selector: 'app-specializations-list',
  templateUrl: './specializations-list.component.html',
  styleUrls: ['./specializations-list.component.scss'],
})
export class SpecializationsListComponent implements OnInit {
  tableConfig: GenericTableConfig = {
    displayedColumns: [
      { label: 'Id', field: 'id', type: GenericTableColumnsType.NUMBER },
      { label: 'Nazwa', field: 'name', type: GenericTableColumnsType.TEXT },
    ],
    editFields: [
      { label: 'Id', key: 'id', type: GenericDialogFieldsType.HIDDEN },
      { label: 'Nazwa', key: 'name', type: GenericDialogFieldsType.TEXT },
    ],
    newItem: 'Dodaj specializacje',
    editItem: 'Edytuj specializacje',
  };

  constructor(
    public state: SpecializationsState,
    private dataService: SpecializationsDataService
  ) {}

  ngOnInit(): void {
    this.state.getSpecies();
  }

  create(payload: { name: string }): void {
    this.dataService.create(payload.name).subscribe(() => {
      this.state.getSpecies();
    });
  }

  update(payload: Specializaton): void {
    this.dataService.update(payload).subscribe(() => {
      this.state.getSpecies();
    });
  }
}
