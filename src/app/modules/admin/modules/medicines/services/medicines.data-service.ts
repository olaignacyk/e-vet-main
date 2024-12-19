import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';

@Injectable({ providedIn: 'root' })
export class MedicinesDataService {
  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get(apiUrl + 'medicines');
  }

  createMedicine(name: string): Observable<any> {
    return this.http.post(apiUrl + 'medicines', { name });
  }

  updateMedicine(payload: any): Observable<any> {
    return this.http.put(apiUrl + 'medicines/' + payload.id, payload);
  }
}
