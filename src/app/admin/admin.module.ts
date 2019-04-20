import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminShellComponent } from './admin-shell.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModuleModule } from '../material-module/material-module.module';

const routes: Routes = [
  { path: '', component: AdminShellComponent },
];

@NgModule({
  declarations: [AdminShellComponent],
  imports: [
    CommonModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
