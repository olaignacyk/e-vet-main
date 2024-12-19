import { Component, OnInit } from '@angular/core';
import { GenericDialogFieldsType } from 'src/app/modules/shared/resources/enums/generic-dialog-fields-type.enum';
import { GenericTableColumnsType } from 'src/app/modules/shared/resources/enums/generic-table-columns-type.enum';
import { SpeciesState } from '../../services/species.state';
import { SpeciesListTableItem } from '../../resources/interfaces/species-list-table-item.interface';
import { SpeciesDataService } from '../../services/species.data-service';
import { map } from 'rxjs/operators';
import { GenericTableConfig } from 'src/app/modules/shared/resources/interfaces/generic-table-config.interface';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss'],
})
export class SpeciesListComponent implements OnInit {
  tableConfig: GenericTableConfig = {
    displayedColumns: [
      { label: 'Id', field: 'id', type: GenericTableColumnsType.NUMBER },
      { label: 'Nazwa', field: 'name', type: GenericTableColumnsType.TEXT },
    ],
    editFields: [
      { label: 'Nazwa', key: 'name', type: GenericDialogFieldsType.TEXT },
      {
        label: 'Specjalizacja',
        key: 'specializationId',
        type: GenericDialogFieldsType.SELECT,
        async: true,
        asyncValues: this.speciesState.specializations.pipe(
          map((data) =>
            data.map((spec) => ({
              label: spec.name,
              value: spec.id,
            }))
          )
        ),
      },
    ],
    newItem: 'Dodaj gatunek',
    editItem: 'Edytuj gatunek',
  };

  constructor(
    public speciesState: SpeciesState,
    private dataService: SpeciesDataService
  ) {}

  ngOnInit(): void {
    this.speciesState.getSpecies();
    this.speciesState.specializations.subscribe(console.log);
  }

  create(payload: SpeciesListTableItem): void {
    this.dataService.create(payload).subscribe(() => {
      this.speciesState.getSpecies();
    });
  }
}
