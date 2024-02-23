import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorizontalScrollComponent } from './horizontal-scroll.component';
import { BagdeModule } from '../bagde/bagde.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    BagdeModule,
    ButtonModule
  ],
  declarations: [HorizontalScrollComponent],
  exports: [HorizontalScrollComponent],
})
export class HorizontalScrollModule { }
