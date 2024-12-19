import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationDataService } from 'src/app/modules/shared/services/reservation.data-service';
import { PetsDataService } from '../pets/services/pets.data-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentDataService } from 'src/app/modules/shared/services/appointment.data-service';
import { ProcedureDataService } from 'src/app/modules/shared/services/procedure.data-service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss'],
})
export class ReservationDetailsComponent implements OnInit {
  reservationId: string;

  reservation: any;
  pet: any;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private reservationDataService: ReservationDataService,
    private petDataService: PetsDataService,
    private appointmentDataService: AppointmentDataService,
    private procedureDataService: ProcedureDataService,
    private fb: FormBuilder
  ) {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.reservationId = params['id'];
        this.getReservationDetails();
      }
    });
  }

  ngOnInit(): void {
    this.initGenerateForm();
  }

  getReservationDetails(): void {
    this.reservationDataService
      .getReservationById(this.reservationId)
      .subscribe((reservation) => {
        this.petDataService.getPetById(reservation.pet.id).subscribe((pet) => {
          this.reservation = reservation;
          this.pet = pet;
        });
      });
  }

  onSave(procedures: any[]): void {
    this.appointmentDataService
      .createAppointment({
        ...this.form.value,
        medicalHistoryId: this.pet.medicalHistory.id,
        appointmentReservationId: this.reservation.id,
      })
      .subscribe((res) => {
        procedures.forEach((procedure) => {
          this.procedureDataService
            .createProcedure({
              name: procedure.name,
              description: procedure.description,
              appointmentId: res.id,
              medicalHistoryId: this.pet.medicalHistory.id,
            })
            .subscribe((procedureRes) => {
              console.log('nowy zabieg', procedureRes);
            });
        });
      });
  }

  private initGenerateForm(): void {
    this.form = this.fb.group({
      diagnosis: ['', Validators.required],
      recommendations: ['', Validators.required],
    });
  }
}
