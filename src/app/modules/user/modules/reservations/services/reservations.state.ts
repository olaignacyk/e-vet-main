import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  delay,
  first,
  Observable,
  of,
  withLatestFrom,
} from 'rxjs';
import { ReservationDataService } from 'src/app/modules/shared/services/reservation.data-service';
import { PetsDataService } from '../../pets/services/pets-data.service';
import { AuthState } from '../../../../auth/modules/auth-state/auth.state';
import { ReservationItem } from 'src/app/modules/shared/resources/interfaces/responses/reservation-item.response';
import { UserToken } from 'src/app/modules/shared/resources/interfaces/user-token.interface';
import { OwnerDataService } from 'src/app/modules/shared/services/owner.data-service';

@Injectable()
export class ReservationsState {
  reservations = new BehaviorSubject<ReservationItem[]>([]);
  reservationsIsLoading = new BehaviorSubject(false);

  constructor(
    private dataService: ReservationDataService,
    private petsDataService: PetsDataService,
    private ownerDataService: OwnerDataService,
    private authState: AuthState
  ) {}

  getReservations(): void {
    this.reservationsIsLoading.next(true);

    this.authState.user.pipe(first()).subscribe((user: UserToken | null) => {
      if (user) {
        this.ownerDataService.getOwnerById(user.userId).subscribe((owner) => {
          owner.pets.forEach((pet: any) => {
            this.petsDataService.getPetById(pet.id).subscribe((petDetails) => {
              this.reservations.next([
                ...this.reservations.value,
                ...petDetails.medicalHistory.appointments.map(
                  (appointment: any) => {
                    return { ...appointment, name: pet.name };
                  }
                ),
              ]);
              console.log(this.reservations.value);
              this.reservationsIsLoading.next(false);
            });
          });
        });
      }
    });

    // this.authState.user.subscribe(console.error);
    //
    // combineLatest([this.petsDataService.getList(), this.authState.user])
    //   .pipe(first())
    //   .subscribe(([pets, user]) => {
    //     if (user) {
    //       const relatedPets = pets.filter(
    //         (pet) => pet.owner?.id === user.userId
    //       );
    //
    //       const relatedReservations: any[] = [];
    //
    //       relatedPets.forEach((pet) => {
    //         relatedReservations.push(
    //           ...(pet.appointmentReservations?.map((reservation) => ({
    //             ...reservation,
    //             petName: pet.name,
    //           })) ?? [])
    //         );
    //       });
    //
    //       this.reservations.next(relatedReservations);
    //       this.reservationsIsLoading.next(false);
    //       console.log(relatedReservations);
    //     }
    //   });
  }
}
