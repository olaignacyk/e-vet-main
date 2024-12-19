import { Component, OnInit } from '@angular/core';
import { GenericUserTableConfig } from '../../../shared/resources/interfaces/user-table-config.interface';
import { GenericDialogFieldsType } from 'src/app/modules/shared/resources/enums/generic-dialog-fields-type.enum';
import { GenericTableColumnsType } from 'src/app/modules/shared/resources/enums/generic-table-columns-type.enum';
import { PetsState } from '../../services/pets.state';
import { OwnersListTableItem } from '../../../../../admin/modules/owners/resources/interfaces/owners-list-table-item.interface';
import { Pet } from '../../resources/interfaces/pet.interface';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
})
export class PetsListComponent implements OnInit {
  tableConfig: GenericUserTableConfig = {
    displayedColumns: [
      { label: 'Nazwa', field: 'name', type: GenericTableColumnsType.TEXT },
      {
        label: 'Data urodzenia',
        field: 'birthDate',
        type: GenericTableColumnsType.DATE,
      },
      { label: 'Płeć', field: 'gender', type: GenericTableColumnsType.TEXT },
      {
        label: 'Wykastrowany',
        field: 'neutered',
        type: GenericTableColumnsType.TOGGLE,
      },
    ],
    editFields: [
      { label: 'Nazwa', key: 'name', type: GenericDialogFieldsType.TEXT },
      { label: 'Płeć', key: 'gender', type: GenericDialogFieldsType.TEXT },
      {
        label: 'Data urodzenia',
        key: 'birthDate',
        type: GenericDialogFieldsType.DATE,
      },
      {
        label: 'Waga (kg)',
        key: 'weightKg',
        type: GenericDialogFieldsType.NUMBER,
      },
      {
        label: 'Gatunek',
        key: 'speciesId',
        type: GenericDialogFieldsType.SELECT,
        async: true,
        asyncValues: this.petState.species.pipe(
          map((species) =>
            species.map((spec) => ({ label: spec.name, value: spec.id }))
          )
        ),
      },
      {
        label: 'Wykastrowany',
        key: 'neutered',
        type: GenericDialogFieldsType.TOGGLE,
      },
    ],
    newItem: 'Dodaj zwierzę',
    editItem: 'Mój zwierzak',
  };
  constructor(public petState: PetsState, private router: Router) {}

  ngOnInit(): void {
    this.petState.getPets();
    this.petState.species.subscribe(console.log);
  }

  onOpenDetailsRes(id: any): void {
    this.router.navigate(['/user/pets/', id]);
  }

  onCreateDialogRes(res: Pet): void {
    this.petState.createPet({
      ...res,
      birthDate: moment(res.birthDate).format('YYYY-MM-DD'),
    });
  }
}
