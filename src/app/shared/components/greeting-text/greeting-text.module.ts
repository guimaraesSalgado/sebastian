import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetingTextComponent } from './greeting-text.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [GreetingTextComponent],
  exports: [GreetingTextComponent],

})
export class GreetingTextModule { }
