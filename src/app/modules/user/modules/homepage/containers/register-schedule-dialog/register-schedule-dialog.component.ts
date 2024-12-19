import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pet } from '../../../pets/resources/interfaces/pet.interface';

@Component({
  selector: 'app-register-schedule-dialog',
  templateUrl: './register-schedule-dialog.component.html',
  styleUrls: ['./register-schedule-dialog.component.scss'],
})
export class RegisterScheduleDialogComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      start: Date;
      isNextFree: boolean;
      doctorName: string;
      doctorId: string;
      pets: Pet[];
    },
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RegisterScheduleDialogComponent>
  ) {
    console.log(data.pets);
  }

  ngOnInit(): void {
    this.initGenerateForm();
  }

  save(): void {
    this.dialogRef.close({
      ...this.formGroup.value,
      date: this.data.start,
      doctorId: this.data.doctorId,
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  private initGenerateForm(): void {
    this.formGroup = this.fb.group({
      type: [15],
      pet: [null],
    });
  }
}
