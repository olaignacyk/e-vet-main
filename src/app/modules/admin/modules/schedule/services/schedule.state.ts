import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScheduleDataService } from 'src/app/modules/shared/services/schedule.data-service';
import { Moment } from 'moment';
import { CalendarEvent } from 'angular-calendar';
import * as moment from 'moment';
import { Schedule } from '../resources/interfaces/schedule.interface';

@Injectable()
export class ScheduleState {
  schedules = new BehaviorSubject<Schedule[]>([]);
  calendarEvents = new BehaviorSubject<CalendarEvent[]>([]);
  scheduleIsLoading = new BehaviorSubject(false);

  constructor(private dataService: ScheduleDataService) {}

  getSchedules(start: Moment, end: Moment): void {
    this.scheduleIsLoading.next(true);

    this.dataService.getList().subscribe((data) => {
      this.schedules.next([...data, ...this.getVisits(start, end, data)]);
      this.calendarEvents.next(
        this.schedules.value.map((schedule) => ({
          start: moment(schedule.date + ' ' + schedule.startTime).toDate(),
          end: moment(schedule.date + ' ' + schedule.endTime).toDate(),
          title: schedule.id == 0 ? 'Brak dyżuru' : 'Dyżur',
          meta: schedule.id,
          color:
            schedule.id == 0
              ? { primary: 'gray', secondary: 'transparent' }
              : { primary: '#9dc5e3', secondary: '#c7d4ff' },
        }))
      );
      this.scheduleIsLoading.next(false);
    });
  }

  private getVisits(start: Moment, end: Moment, res: Schedule[]): Schedule[] {
    const events: Schedule[] = [];
    let tmpDate = moment(start.toDate());
    while (tmpDate.valueOf() <= end.valueOf()) {
      let dayStart = moment(tmpDate.toDate()).hours(8);
      let dayEnd = moment(tmpDate.toDate()).hours(20);

      console.log(dayStart.format('YYYY-MM-DD'), dayEnd.toISOString());

      const schedules = res
        .filter((event) => event.date === dayStart.format('YYYY-MM-DD'))
        .map((event) => ({
          ...event,
          start: moment(event.date + ' ' + event.startTime),
          end: moment(event.date + ' ' + event.endTime),
        }))
        .sort((a, b) => a.start.valueOf() - b.start.valueOf());

      if (!schedules.length) {
        events.push({
          // start: dayStart.toDate(),
          // end: dayEnd.toDate(),
          // title: 'Brak dyżuru',
          // meta: 1,
          // color: { primary: 'gray', secondary: 'transparent' },
          id: 0,
          date: dayStart.format('YYYY-MM-DD'),
          startTime: dayStart.format('HH:mm:ss'),
          endTime: dayEnd.format('HH:mm:ss'),
        });
      } else {
        let tmpEventStart = moment(dayStart.toDate());
        let tmpEventEnd = moment(dayStart.toDate());

        let i = 0;
        while (tmpEventEnd.hours() < 20) {
          if (!schedules[i]) {
            const previousEvent = schedules[i - 1];
            if (moment(previousEvent.end).hours() !== 20) {
              events.push({
                date: moment(previousEvent.end).format('YYYY-MM-DD'),
                startTime: moment(previousEvent.end).format('HH:mm:ss'),
                endTime: dayEnd.format('HH:mm:ss'),
                id: 0,
              });
            }
            break;
          }

          const start = moment(schedules[i].start);
          const end = moment(schedules[i].end);

          if (start.isAfter(tmpEventStart)) {
            events.push({
              date: tmpEventStart.format('YYYY-MM-DD'),
              startTime: tmpEventStart.format('HH:mm:ss'),
              endTime: start.format('HH:mm:ss'),
              id: 0,
            });

            tmpEventStart.hours(end.hours()).minutes(end.minutes());
            tmpEventEnd.hours(end.hours()).minutes(end.minutes());
          } else {
            tmpEventStart.hours(end.hours()).minutes(end.minutes());
            tmpEventEnd.hours(end.hours()).minutes(end.minutes());
          }

          i++;
        }
      }

      tmpDate.add(1, 'days');
    }

    console.warn(events);
    return events;
  }
}
