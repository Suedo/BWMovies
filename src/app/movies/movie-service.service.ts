import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Movie } from './models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private fs: AngularFirestore) { }

  addMovieFS(movie: Movie){
    this.fs.collection('movies').add(movie);
  }

  getMoviesFS(){
    return this.fs.collection('movies').snapshotChanges();
  }
}
