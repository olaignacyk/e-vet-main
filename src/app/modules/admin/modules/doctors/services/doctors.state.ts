import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DoctorsDataService } from './doctors.data-service';

@Injectable()
export class DoctorsState {
  doctors = new BehaviorSubject<any[]>([]);
  doctorsIsLoading = new BehaviorSubject(false);

  constructor(private dataService: DoctorsDataService) {}

  getDoctors(): void {
    this.doctorsIsLoading.next(true);

    this.dataService.getList().subscribe((data) => {
      this.doctors.next(data);
      this.doctorsIsLoading.next(false);
    });
  }
}
