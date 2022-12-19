import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
  ],
  declarations: [NotFoundComponent],
  exports: [
    NotFoundComponent
  ]
})
export class FieldsModule { }
