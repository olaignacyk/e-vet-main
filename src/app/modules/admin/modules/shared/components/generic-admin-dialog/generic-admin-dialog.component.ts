import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GenericDialogFieldsType } from 'src/app/modules/shared/resources/enums/generic-dialog-fields-type.enum';

@Component({
  selector: 'app-generic-admin-dialog',
  templateUrl: './generic-admin-dialog.component.html',
  styleUrls: ['./generic-admin-dialog.component.scss'],
})
export class GenericAdminDialogComponent implements OnInit {
  form: FormGroup;

  FieldType = GenericDialogFieldsType;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: number;
      object: any;
      config: any[];
      title: string;
    },
    private dialogRef: MatDialogRef<GenericAdminDialogComponent>,
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

      console.log(this.data);
      this.data.config.forEach((field) => {
        this.form.addControl(
          field.key,
          new FormControl(this.data.object ? this.data.object[field.key] : null)
        );
      });
    }
  }
}
