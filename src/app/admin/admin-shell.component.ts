import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';


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

  constructor(private fb: FormBuilder) { }

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
    this.movies.push(this.buildMovie());
  }

}
