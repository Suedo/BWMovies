import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './models/movie';

import { Observable, from, of,  } from 'rxjs';
import { tap, take, mergeMap, toArray   } from 'rxjs/operators';

@Component({
  selector: 'app-movie-shell',
  templateUrl: './movie-shell.component.html',
  styleUrls: ['./movie-shell.component.scss']
})
export class MovieShellComponent implements OnInit {

  movies: Observable<Movie[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies().pipe(
      mergeMap(movieArr => from(movieArr)), // stream([obj]) ==> stream(obj)
      tap(console.log),
      // take(5), // first 5 obj
      toArray() // [obj0, obj1... obj4], needed for *ngFor iteration using async
    );
  }

}
