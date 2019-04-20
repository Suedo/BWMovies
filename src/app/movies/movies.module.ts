import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieShellComponent } from './movie-shell.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemWebDb } from '../memoryDB/memdata';

@NgModule({
  declarations: [MovieShellComponent, MovieListComponent],
  imports: [
    CommonModule,
    InMemoryWebApiModule.forRoot(InMemWebDb, { delay: 500 }),
  ]
})
export class MoviesModule { }
