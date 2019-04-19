import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieShellComponent } from './movies/movie-shell.component';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';

const routes: Routes = [

  { path: 'movies', component: MovieShellComponent },
  { path: '', pathMatch: 'full', redirectTo: 'movies' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
