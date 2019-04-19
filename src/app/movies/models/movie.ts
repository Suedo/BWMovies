import { Booking } from './booking';

export interface Movie {
  name: string;
  genre: string;
  bookings?: Booking[];
}
