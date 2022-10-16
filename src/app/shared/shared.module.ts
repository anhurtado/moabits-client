import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

const angularComponents = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
];

const sharedComponents = [NotFoundComponent];

@NgModule({
  declarations: [sharedComponents],
  imports: [angularComponents, MaterialModule],
  exports: [angularComponents, MaterialModule, sharedComponents],
})
export class SharedModule {}
