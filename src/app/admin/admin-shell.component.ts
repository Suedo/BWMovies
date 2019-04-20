import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { MovieService } from '../movies/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-shell',
  templateUrl: './admin-shell.component.html',
  styleUrls: ['./admin-shell.component.scss']
})
export class AdminShellComponent implements OnInit {
  movieForm: FormGroup;

  get movies(): FormArray {
    return this.movieForm.get('movies') as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router,
    private movieService: MovieService) { }

  private validationMessages = {
    name: 'Please enter movie name.',
    date: 'Please enter a valid date to screen the movie.',
    time: 'Morning, Matinee and Evening shows only'
  };

  ngOnInit() {
    this.movieForm = this.fb.group({
      date: ['', [Validators.required]],
      movies: this.fb.array([this.buildMovie()])
    });
  }

  buildMovie(): FormGroup {
    return this.fb.group({
      name: ['',  [Validators.required]],
      genre: [''],
      time: ['',  [Validators.required]],
    });
  }

  addMovie(): void {
    console.log('adding a movie');
    this.movies.push(this.buildMovie());
  }

  save() {
    console.log(this.movieForm);
    console.log('\n\n',this.movieForm.value); // what we want

    // add screening
    this.movieService.addScreening(this.movieForm.value).subscribe(
      () => this.onSaveComplete(),
      (error: any) => console.error(error)
    );

  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.movieForm.reset();
    this.router.navigate(['/movies']);
  }

}
