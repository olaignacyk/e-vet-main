import { Component, OnInit } from '@angular/core';
import { ReservationDataService } from 'src/app/modules/shared/services/reservation.data-service';
import { ActivatedRoute } from '@angular/router';
import { AppointmentDataService } from 'src/app/modules/shared/services/appointment.data-service';
import { PetsDataService } from '../../../pets/services/pets-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private appointmentsDataService: AppointmentDataService,
    private petDataService: PetsDataService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initGenerateForm();

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.reservationId = params['id'];
        this.appointmentsDataService
          .getById(this.reservationId)
          .subscribe((res) => {
            this.reservation = res;

            this.form.setValue({
              diagnosis: res.diagnosis,
              recommendations: res.recommendations,
            });

            this.petDataService
              .getPetById(res.medicalHistory.id)
              .subscribe((pet) => {
                this.pet = pet;
              });
          });
      }
    });
  }

  private initGenerateForm(): void {
    this.form = this.fb.group({
      diagnosis: ['', Validators.required],
      recommendations: ['', Validators.required],
    });
  }
}
