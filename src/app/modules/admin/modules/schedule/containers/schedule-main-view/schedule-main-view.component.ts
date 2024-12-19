import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarEvent } from 'angular-calendar';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleEventDialogComponent } from '../schedule-event-dialog/schedule-event-dialog.component';
import { ScheduleState } from '../../services/schedule.state';
import { ScheduleDataService } from 'src/app/modules/shared/services/schedule.data-service';

@Component({
  selector: 'app-schedule-main-view',
  templateUrl: './schedule-main-view.component.html',
  styleUrls: ['./schedule-main-view.component.scss'],
})
export class ScheduleMainViewComponent implements OnInit {
  readonly today = moment();
  readonly refreshCalendar = new Subject<void>();

  constructor(
    public state: ScheduleState,
    private dialog: MatDialog,
    private dataService: ScheduleDataService
  ) {}

  get startOfPeriod() {
    return moment(this.today).startOf('week').add(1, 'day');
  }

  get endOfPeriod() {
    return moment(this.today).endOf('week');
  }

  ngOnInit(): void {
    this.initCalendarRefresh();
    this.state.getSchedules(this.startOfPeriod, this.endOfPeriod);
  }

  initCalendarRefresh(): void {
    this.state.schedules.subscribe((visits) => {
      this.refreshCalendar.next();
    });
  }

  openCalendarEvent(eventField: {
    event: CalendarEvent;
    sourceEvent: MouseEvent | KeyboardEvent;
  }): void {
    if (eventField.event.meta === 0) {
      this.dialog
        .open(ScheduleEventDialogComponent, { data: eventField.event })
        .afterClosed()
        .subscribe((res) => {
          if (res) {
            this.dataService.createSchedule(res).subscribe((schedule) => {
              this.state.getSchedules(this.startOfPeriod, this.endOfPeriod);
            });
          }
        });
    } else {
      this.dataService
        .getScheduleById(eventField.event.meta)
        .subscribe((data) => {
          this.dialog
            .open(ScheduleEventDialogComponent, { data })
            .afterClosed()
            .subscribe((res) => {
              if (res) {
                this.dataService.updateSchedule(res).subscribe((res) => {
                  this.state.getSchedules(this.startOfPeriod, this.endOfPeriod);
                });
              }
            });
        });
    }
  }

  navigatePrevious(): void {
    this.today.add(-7, 'days');
    this.state.getSchedules(this.startOfPeriod, this.endOfPeriod);
  }

  navigateNext(): void {
    this.today.add(7, 'days');
    this.state.getSchedules(this.startOfPeriod, this.endOfPeriod);
  }

  addCalendarEvent(): void {}
}
