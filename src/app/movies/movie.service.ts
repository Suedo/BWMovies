import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Movie } from './models/movie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private fs: AngularFirestore,
    private http: HttpClient) { }

  addMovieFS(movie: Movie){
    this.fs.collection('movies').add(movie);
  }

  getMoviesFS(){
    return this.fs.collection('movies').snapshotChanges();
  }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(environment.mem.getMovies);
  }

  addMovie(m: Movie) {

  }

  updateMovie() {

  }
}
