import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from '../movies/models/movie';
import { Booking } from '../movies/models/booking';
import { Screening } from '../movies/models/screening';

export class InMemWebDb implements InMemoryDbService {
  createDb() {
    const movies: Movie[] = [
      { id: 10, name: 'Dhamaal',          genre: 'Comedy',            time: 'morning' },
      { id: 11, name: 'Dirty Picture',    genre: 'Comedy|Drama',      time: 'evening' },
      { id: 12, name: 'Batman',           genre: 'Action|Western',    time: 'matinee' },
      { id: 13, name: 'Notebook',         genre: 'Romace',            time: 'morning' },
      { id: 14, name: 'The Inside Job',   genre: 'Documentary',       time: 'morning' }
    ];

    const bookings: Booking[] = [
      { id: 10, name: 'Jarrett Harridge',   flatNumber: 'B6043', seats: 17 },
      { id: 12, name: 'Fran Ronisch',       flatNumber: 'B4092', seats: 34 },
      { id: 13, name: 'Korrie Redparth',    flatNumber: 'B2152', seats: 15 },
      { id: 14, name: 'Gaile Extal',        flatNumber: 'B6013', seats: 36 },
      { id: 15, name: 'Ellissa Verity',     flatNumber: 'B4125', seats: 8  },
      { id: 16, name: 'Lauraine Quadrio',   flatNumber: 'B3033', seats: 17 },
      { id: 17, name: 'Raquela Nattriss',   flatNumber: 'B6033', seats: 21 },
      { id: 18, name: 'Breena Senn',        flatNumber: 'B5035', seats: 2  },
      { id: 19, name: 'Ingrim Bristow',     flatNumber: 'B1026', seats: 21 },
      { id: 20, name: 'Donal Latch',        flatNumber: 'B6031', seats: 40 },
      { id: 21, name: 'Clarissa Castella',  flatNumber: 'B1024', seats: 17 },
      { id: 22, name: 'Alexandro Druery',   flatNumber: 'B4010', seats: 8  },
      { id: 23, name: 'Nichols Bowater',    flatNumber: 'B3046', seats: 22 },
      { id: 24, name: 'Fax Issacson',       flatNumber: 'B8049', seats: 37 },
      { id: 25, name: 'Chanda Concklin',    flatNumber: 'B6141', seats: 21 },
      { id: 26, name: 'Reagan Burtwhistle', flatNumber: 'B9145', seats: 13 },
      { id: 27, name: 'Stan Witheford',     flatNumber: 'B2167', seats: 27 },
      { id: 28, name: 'Brianne Conrart',    flatNumber: 'B4141', seats: 24 },
      { id: 29, name: 'Arabelle Romera',    flatNumber: 'B5085', seats: 35 },
      { id: 30, name: 'Kelcy Clausen-Thue', flatNumber: 'B9031', seats: 2  },
    ];

    const screening: Screening[] = [
      { date: "21/4/2019", movies: [ { id: 10, name: 'Dhamaal', genre: 'Comedy', time: 'morning' } ] }

    ]
    return { movies, bookings };
  }
}
