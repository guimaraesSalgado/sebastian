import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseComponent } from './collapse.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [CollapseComponent],
  exports: [CollapseComponent],

})
export class CollapseModule { }
