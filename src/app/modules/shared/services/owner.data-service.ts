import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/app/modules/shared/resources/data/config.data';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OwnerDataService {
  constructor(private http: HttpClient) {}

  getOwnerById(id: string): Observable<any> {
    return this.http.get(apiUrl + 'owners/' + id);
  }
}
