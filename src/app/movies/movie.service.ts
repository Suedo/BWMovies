import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Movie } from './models/movie';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Screening } from './models/screening';
import { tap, catchError } from 'rxjs/operators';

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
    return this.http.get<Movie[]>(environment.mem.movies);
  }

  addMovie(m: Movie) {

  }

  updateMovie() {

  }

  addScreening(screening: Screening): Observable<Screening> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    screening.id = null;
    return this.http.post<Screening>(environment.mem.screening, screening, { headers })
      .pipe(
        tap(data => console.log('createScreening: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
