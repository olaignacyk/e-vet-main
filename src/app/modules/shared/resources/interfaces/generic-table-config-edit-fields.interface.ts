import { GenericDialogFieldsType } from '../enums/generic-dialog-fields-type.enum';
import { GenericTableSelectValue } from './generic-table-select-value.interface';
import { Observable } from 'rxjs';

export interface GenericTableConfigEditField {
  label: string;
  key: string;
  type: GenericDialogFieldsType;
  values?: GenericTableSelectValue[];
  asyncValues?: Observable<GenericTableSelectValue[]>;
  async?: boolean;
}
