import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, delay, Observable, of } from 'rxjs';
import { OwnersDataService } from './owners.data-service';
import { OwnersListTableItem } from '../resources/interfaces/owners-list-table-item.interface';

@Injectable()
export class OwnersState {
  owners = new BehaviorSubject<OwnersListTableItem[]>([]);
  ownersIsLoading = new BehaviorSubject(false);

  constructor(private dataService: OwnersDataService) {}

  getOwners(): void {
    this.ownersIsLoading.next(true);

    this.dataService.getList().subscribe((data) => {
      this.owners.next(data);
      this.ownersIsLoading.next(false);
    });
  }
}
