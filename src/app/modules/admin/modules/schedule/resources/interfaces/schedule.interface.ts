export interface Schedule {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  doctor?: {
    firstName: string;
    lastName: string;
    id: string;
  };
}
