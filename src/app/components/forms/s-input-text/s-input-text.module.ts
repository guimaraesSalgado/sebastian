import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SeInputTextComponent } from './s-input-text.component';
import { SeErrorModule } from '../config/s-error/s-error.module';
import { SeLabelModule } from '../config/s-label/s-label.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    SeErrorModule,
    SeLabelModule,
  ],
  declarations: [SeInputTextComponent],
  exports: [SeInputTextComponent],
})
export class SeInputTextModule {}
