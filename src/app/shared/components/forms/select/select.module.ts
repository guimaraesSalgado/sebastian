import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroEye, HeroEyeOff } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';

import { ErrorModule } from '../config/error/error.module';
import { SeLabelModule } from '../config/label/label.module';
import { SelectComponent } from './select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ErrorModule,
    SeLabelModule,
    NgIconsModule,
    NgIconsModule.withIcons({ HeroEye, HeroEyeOff }),
  ],
  declarations: [SelectComponent],
  exports: [SelectComponent],
})
export class SelectModule {}
