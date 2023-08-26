import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeErrorComponent } from './s-error.component';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [SeErrorComponent],
  exports: [SeErrorComponent],
})
export class SeErrorModule {}
