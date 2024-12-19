import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericTableColumnsType } from 'src/app/modules/shared/resources/enums/generic-table-columns-type.enum';
import { GenericDialogFieldsType } from 'src/app/modules/shared/resources/enums/generic-dialog-fields-type.enum';
import { v4 as uuidv4 } from 'uuid';
import { FormGroup } from '@angular/forms';
import { GenericTableConfig } from 'src/app/modules/shared/resources/interfaces/generic-table-config.interface';

@Component({
  selector: 'app-visit-details-card',
  templateUrl: './visit-details-card.component.html',
  styleUrls: ['./visit-details-card.component.scss'],
})
export class VisitDetailsCardComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() readonly = false;
  @Input() procedures: any[] = [];
  @Input() date: string;
  @Output() save = new EventEmitter<any[]>();

  proceduresTableConfig: GenericTableConfig = {
    displayedColumns: [
      { label: 'Nazwa', field: 'name', type: GenericTableColumnsType.TEXT },
      {
        label: 'Opis',
        field: 'description',
        type: GenericTableColumnsType.TEXT,
      },
    ],
    editFields: [
      { label: 'id', key: 'id', type: GenericDialogFieldsType.HIDDEN },
      { label: 'Nazwa', key: 'name', type: GenericDialogFieldsType.TEXT },
      { label: 'Opis', key: 'description', type: GenericDialogFieldsType.TEXT },
    ],
    newItem: 'Dodaj zabieg',
    editItem: 'Edytuj zabieg',
  };

  constructor() {}

  ngOnInit(): void {}

  createProcedure(event: any): void {
    this.procedures.push({ ...event, id: uuidv4() });
    this.procedures = [...this.procedures];
    console.log(this.procedures);
  }

  editProcedure(event: any): void {
    const relatedProcedure = this.procedures.find(
      (procedure) => procedure.id === event.id
    );

    relatedProcedure.name = event.name;
    relatedProcedure.description = event.description;

    this.procedures = [...this.procedures];
  }

  onSave(): void {
    this.save.next(this.procedures);
  }
}
