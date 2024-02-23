import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextLimitPipe } from './text-limit/text-limit.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TextLimitPipe],
  exports: [TextLimitPipe]
})
export class PipesModule { }
