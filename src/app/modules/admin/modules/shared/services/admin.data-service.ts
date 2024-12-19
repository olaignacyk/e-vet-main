import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminDataService {
  constructor() {}

  getVisits(): Observable<CalendarEvent[]> {
    return of(mockedData);
  }

  addVisit(payload: CalendarEvent): void {
    mockedData.push(payload);
  }
}

const mockedData: CalendarEvent[] = [
  {
    start: moment().minutes(45).seconds(0).toDate(),
    end: moment().add(3, 'h').minutes(0).seconds(0).toDate(),
    title: 'Connor-MacGregor',
  },

  {
    start: moment().add(-4, 'h').minutes(15).seconds(0).toDate(),
    end: moment().add(-2, 'h').minutes(15).seconds(0).toDate(),
    title: 'Connor-MacGregor',
  },
  {
    start: moment().hours(10).minutes(0).seconds(0).add(2, 'days').toDate(),
    end: moment().hours(12).minutes(60).seconds(0).add(2, 'days').toDate(),
    title: 'Connor-MacGregor',
  },
];
