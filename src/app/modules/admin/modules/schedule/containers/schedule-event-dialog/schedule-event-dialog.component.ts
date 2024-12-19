import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CalendarEvent } from 'angular-calendar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { DoctorsDataService } from '../../../doctors/services/doctors.data-service';
import { BehaviorSubject } from 'rxjs';
import { DoctorsListTableItem } from '../../../doctors/resources/interfaces/doctors-list-table-item.interface';
import { Schedule } from '../../resources/interfaces/schedule.interface';

@Component({
  selector: 'app-schedule-event-dialog',
  templateUrl: './schedule-event-dialog.component.html',
  styleUrls: ['./schedule-event-dialog.component.scss'],
})
export class ScheduleEventDialogComponent implements OnInit {
  form: FormGroup;
  timeList: string[] = [];
  doctors$ = new BehaviorSubject<DoctorsListTableItem[]>([]);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private doctors: DoctorsDataService,
    private dialogRef: MatDialogRef<ScheduleEventDialogComponent>
  ) {
    this.generateForm();

    const start = moment(data.start ?? data.date + ' ' + data.startTime);
    const end = moment(data.end ?? data.date + ' ' + data.endTime);
    console.log(data.date);

    let current = start.clone();

    while (current.isSameOrBefore(end)) {
      this.timeList.push(current.format('HH:mm'));
      current.add(15, 'minutes');
    }

    if (data.doctor) {
      console.log(data);
      this.form.patchValue({
        startTime: data.startTime.slice(0, 5),
        endTime: data.endTime.slice(0, 5),
        doctorId: data.doctor.id,
      });
    }

    console.log(this.timeList);
  }

  ngOnInit(): void {
    this.doctors.getList().subscribe((list) => {
      this.doctors$.next(list);
    });
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close({
        ...this.data,
        ...this.form.value,
        date: this.data.date
          ? this.data.date
          : moment(this.data.start).format('YYYY-MM-DD'),
      });
    }
  }

  private generateForm(): void {
    this.form = this.fb.group({
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      doctorId: [null, Validators.required],
    });
  }
}
