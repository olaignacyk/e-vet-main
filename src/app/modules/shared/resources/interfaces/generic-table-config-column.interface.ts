import { GenericTableColumnsType } from '../enums/generic-table-columns-type.enum';

export interface GenericTableConfigColumn {
  label: string;
  field: string;
  type: GenericTableColumnsType;
}
