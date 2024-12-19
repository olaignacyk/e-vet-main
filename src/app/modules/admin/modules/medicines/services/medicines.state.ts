import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { MedicinesDataService } from './medicines.data-service';

@Injectable()
export class MedicinesState {
  medicines = new BehaviorSubject<any[]>([]);
  medicinesIsLoading = new BehaviorSubject(false);

  constructor(private dataService: MedicinesDataService) {}

  getMedicines(): void {
    this.medicinesIsLoading.next(true);

    this.dataService.getList().subscribe((medicines) => {
      console.log(medicines);
      this.medicines.next(medicines);
      this.medicinesIsLoading.next(false);
    });
  }
}
