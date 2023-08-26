import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeLabelComponent } from './s-label.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeLabelComponent],
  exports: [SeLabelComponent],
})
export class SeLabelModule {}
