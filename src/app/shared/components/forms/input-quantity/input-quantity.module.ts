import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroMinus, HeroPlus } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';

import { InputQuantityComponent } from './input-quantity.component';
import { ErrorModule } from '../config/error/error.module';
import { SeLabelModule } from '../config/label/label.module';
import { ButtonModule } from '../../button/button.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ErrorModule,
    SeLabelModule,
    ButtonModule,
    NgIconsModule,
    NgIconsModule.withIcons({ HeroMinus, HeroPlus }),
  ],
  declarations: [InputQuantityComponent],
  exports: [InputQuantityComponent],
})
export class InputQuantityModule {}
