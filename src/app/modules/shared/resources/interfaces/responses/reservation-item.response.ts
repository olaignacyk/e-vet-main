import { Pet } from '../../../../user/modules/pets/resources/interfaces/pet.interface';

export interface ReservationItem {
  id: number;
  dateCreated: string;
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  canceled: boolean;
  cancellationReason: string;
  pet: Pet;
}
