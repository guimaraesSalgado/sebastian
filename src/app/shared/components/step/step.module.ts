import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepComponent } from './step.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [StepComponent],
  exports: [StepComponent],

})
export class StepModule { }
