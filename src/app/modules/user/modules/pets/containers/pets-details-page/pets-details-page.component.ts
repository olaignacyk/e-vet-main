import { Component, OnInit } from '@angular/core';
import { PetsState } from '../../services/pets.state';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { Pet } from '../../resources/interfaces/pet.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { PetsDataService } from '../../services/pets-data.service';

@Component({
  selector: 'app-pets-details-page',
  templateUrl: './pets-details-page.component.html',
  styleUrls: ['./pets-details-page.component.scss'],
})
export class PetsDetailsPageComponent implements OnInit {
  petId: number;
  pet: any;
  loading = false;

  constructor(
    private petDataService: PetsDataService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.loading = true;
        this.petId = params['id'];
        this.petDataService.getPetById(params['id']).subscribe((pet) => {
          this.pet = { ...pet, form: this.getPetFormGroup(pet) };
          this.loading = false;
        });
      }
    });
  }

  ngOnInit(): void {}

  getPetProcedures(): any[] {
    return [].concat(
      ...this.pet.medicalHistory.appointments.map((appointment: any) =>
        appointment.procedures.map((procedure: any) => ({
          ...procedure,
          date: appointment.date,
        }))
      )
    );
  }

  private getPetFormGroup(details: any): FormGroup {
    return this.fb.group({
      name: [details.name, Validators.required],
      species: [details.species.name, Validators.required],
      birthDate: [details.birthDate, Validators.required],
      gender: [details.gender, Validators.required],
      weight: [details.weightKg, Validators.required],
      neutered: [details.neutered, Validators.required],
    });
  }
}
