export interface CreateReservationPayload {
  date: string;
  startTime: string;
  endTime: string;
  price: number;
  petId: number;
  doctorId: string;
}
