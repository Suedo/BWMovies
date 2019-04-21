import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, FormControlName } from '@angular/forms';
import { MovieService } from '../movies/movie.service';
import { Router } from '@angular/router';
import { GenericValidator, MovieScreeningInputValidationMessages } from './shared';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

// Provide the set of valid validation messages

@Component({
  selector: 'app-admin-shell',
  templateUrl: './admin-shell.component.html',
  styleUrls: ['./admin-shell.component.scss']
})
export class AdminShellComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  movieForm: FormGroup;
  genericValidator: GenericValidator;
  validationMessages: MovieScreeningInputValidationMessages;
  displayMessage: { [key: string]: string; } = {};

  get movies(): FormArray {
    return this.movieForm.get('movies') as FormArray;
  }

  constructor(private fb: FormBuilder, private router: Router, private movieService: MovieService) {

    this.validationMessages = {
      date: { required: 'Date is required' },
      name: { required: 'name is required' },
      time: { required: 'time is required' }
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
    }

  ngOnInit() {
    this.movieForm = this.fb.group({
      date: ['', [Validators.required]],
      movies: this.fb.array([this.buildMovie()])
    });
  }

  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    // This is required because the valueChanges does not provide notification on blur
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    // so we only need to subscribe once.
    merge(this.movieForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(500)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.movieForm);
      console.log(`DisplayMessage:\n${JSON.stringify(this.displayMessage)}`);
      // console.log(this.displayMessage['date']);


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
    console.log('saving: ',this.movieForm);
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
    // this.router.navigate(['/movies']);
  }

}
