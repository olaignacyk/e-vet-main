import { Component, OnInit } from '@angular/core';
import { ScheduleDataService } from 'src/app/modules/shared/services/schedule.data-service';
import { DoctorsDataService } from '../../../doctors/services/doctors.data-service';
import { AuthState } from '../../../../../auth/modules/auth-state/auth.state';
import * as moment from 'moment';

@Component({
  selector: 'app-work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrls: ['./work-schedule.component.scss'],
})
export class WorkScheduleComponent implements OnInit {
  readonly mockedData = [];
  readonly columns = ['date', 'range'];

  schedules: any[] = [];

  constructor(
    private doctorsDataService: DoctorsDataService,
    private authState: AuthState
  ) {}

  ngOnInit(): void {
    this.authState.user.subscribe((user) => {
      if (user) {
        this.doctorsDataService
          .getDoctorById(user.userId)
          .subscribe((doctor) => {
            this.schedules = doctor.schedules
              .filter((schedule: any) => {
                const scheduleDate = moment(
                  schedule.date + ' ' + schedule.endTime
                );

                return scheduleDate.isAfter(moment(new Date()));
              })
              .sort((a: any, b: any) => {
                const aStart = moment(a.date + ' ' + a.startTime);
                const bStart = moment(b.date + ' ' + b.startTime);

                return aStart.valueOf() - bStart.valueOf();
              });
          });
      }
    });
  }
  // const relatedDoctor = doctors.find(
  //   (doctor) => doctor.email === user?.email
  // );
  //
  // if (relatedDoctor) {
  //   console.log(relatedDoctor);
  // }
}
