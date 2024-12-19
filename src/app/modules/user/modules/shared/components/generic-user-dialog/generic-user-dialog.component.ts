import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserTableConfigEditField } from '../../resources/interfaces/user-table-config-edit-fields.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GenericDialogFieldsType } from 'src/app/modules/shared/resources/enums/generic-dialog-fields-type.enum';

@Component({
  selector: 'app-generic-user-dialog',
  templateUrl: './generic-user-dialog.component.html',
  styleUrls: ['./generic-user-dialog.component.scss'],
})
export class GenericUserDialogComponent implements OnInit {
  form: FormGroup;

  FieldType = GenericDialogFieldsType;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: number;
      object: any;
      config: UserTableConfigEditField[];
      title: string;
    },
    private dialogRef: MatDialogRef<GenericUserDialogComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initGenerateForm();
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }

  private initGenerateForm(): void {
    if (this.data.config) {
      this.form = this.fb.group({});

      this.data.config.forEach((field) => {
        this.form.addControl(
          field.key,
          new FormControl(this.data.object ? this.data.object[field.key] : null)
        );
      });
    }
  }
}
