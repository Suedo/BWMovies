import { Booking } from './booking';

export interface Movie {
  id: number;
  name: string;
  genre: string;
  time: string;
  bookings?: Booking[];
}
