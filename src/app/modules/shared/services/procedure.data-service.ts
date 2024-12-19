import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProcedureDataService {
  constructor(private http: HttpClient) {}

  createProcedure(payload: any): Observable<any> {
    return this.http.post(apiUrl + 'procedures', payload);
  }
}
