import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../../admin/modules/schedule/resources/interfaces/schedule.interface';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { CreateSchedule } from '../../admin/modules/schedule/resources/payloads/create-schedule.interface';

@Injectable({ providedIn: 'root' })
export class ScheduleDataService {
  constructor(private http: HttpClient) {}

  getList(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(apiUrl + 'schedules');
  }

  getScheduleById(id: string): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(apiUrl + 'schedules/' + id);
  }

  createSchedule(payload: CreateSchedule): Observable<Schedule[]> {
    return this.http.post<Schedule[]>(apiUrl + 'schedules', payload);
  }

  updateSchedule(payload: Schedule): Observable<Schedule> {
    return this.http.put<Schedule>(apiUrl + 'schedules/' + payload.id, payload);
  }
}
