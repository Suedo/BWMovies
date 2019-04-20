import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; // easier to reach on mobile
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; // loading...
import {MatMenuModule} from '@angular/material/menu'; // must have triple dot menu
import {MatExpansionModule} from '@angular/material/expansion'; // movie cards can go inside
import {MatStepperModule} from '@angular/material/stepper'; // user data entry


// Material table
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

// https://github.com/angular/material2/issues/7898
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    MatStepperModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatExpansionModule,
    MatStepperModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule
  ]
})
export class MaterialModuleModule { }
