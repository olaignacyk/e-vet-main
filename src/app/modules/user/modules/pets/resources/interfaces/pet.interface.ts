import { FormGroup } from '@angular/forms';
import { Treatment } from './treatment.interface';
import { Recommendation } from './recommendation.interface';
import { Visit } from './visit.interface';

export interface Pet {
  id: number;
  name: string;
  gender: string;
  birthDate: string;
  weightKg: number;
  neutered: boolean;
  ownerId?: string;
  owner?: { id: string; email: string };
  appointmentReservations?: any[];
}
