import { GenericTableConfigEditField } from './generic-table-config-edit-fields.interface';
import { GenericTableConfigColumn } from './generic-table-config-column.interface';

export interface GenericTableConfig {
  displayedColumns: GenericTableConfigColumn[];
  editFields: GenericTableConfigEditField[];
  newItem: string;
  editItem: string;
}
