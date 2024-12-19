import { Component, OnInit } from '@angular/core';
import { GenericTableColumnsType } from 'src/app/modules/shared/resources/enums/generic-table-columns-type.enum';
import { PetsState } from '../../services/pets.state';
import { GenericTableConfig } from 'src/app/modules/shared/resources/interfaces/generic-table-config.interface';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
  providers: [PetsState],
})
export class PetsListComponent implements OnInit {
  tableConfig: GenericTableConfig = {
    displayedColumns: [
      { label: 'Id', field: 'id', type: GenericTableColumnsType.NUMBER },
      { label: 'Nazwa', field: 'name', type: GenericTableColumnsType.TEXT },
      {
        label: 'Data urodzenia',
        field: 'birthDate',
        type: GenericTableColumnsType.DATE,
      },
      {
        label: 'Płeć',
        field: 'gender',
        type: GenericTableColumnsType.TEXT,
      },
      {
        label: 'Waga (kg)',
        field: 'weightKg',
        type: GenericTableColumnsType.NUMBER,
      },
      {
        label: 'Wysterylizowany',
        field: 'neutered',
        type: GenericTableColumnsType.TOGGLE,
      },
    ],
    editFields: [],
    newItem: 'Dodaj zwierzę',
    editItem: 'Edytuj zwierzę',
  };

  constructor(public petState: PetsState) {}
  ngOnInit(): void {
    this.petState.getPets();
  }
}
