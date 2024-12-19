import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReservationItem } from 'src/app/modules/shared/resources/interfaces/responses/reservation-item.response';
import { ReservationDataService } from 'src/app/modules/shared/services/reservation.data-service';
import * as moment from 'moment';

@Injectable()
export class DashboardService {
  reservations = new BehaviorSubject<ReservationItem[]>([]);
  reservationsLoading = new BehaviorSubject<boolean>(false);

  constructor(private reservationsDataService: ReservationDataService) {}

  getReservations(): void {
    this.reservationsLoading.next(true);

    this.reservationsDataService.getList().subscribe((reservations) => {
      this.reservations.next(
        reservations.filter(
          (reservation) =>
            reservation.date === moment(new Date()).format('YYYY-MM-DD')
        )
      );

      this.reservationsLoading.next(false);
    });
  }
}
