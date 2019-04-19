import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieShellComponent } from './movie-shell.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [MovieShellComponent, MovieListComponent],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
