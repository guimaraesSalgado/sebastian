import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperComponent } from './stepper.component';
import { ButtonModule } from '../button/button.module';
import { StepComponent } from './step/step.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [StepperComponent, StepComponent],
  exports: [StepperComponent, StepComponent],

})
export class StepperModule { }
