import { Movie } from './movie';

export interface Screening {
  id: number;
  date?: Date;
  movies: Movie[];
}
