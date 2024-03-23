import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { HeroArrowRight, HeroPlus, HeroRefresh, HeroMinus } from '@ng-icons/heroicons/outline';

import { ButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule,

    NgIconsModule,
    NgIconsModule.withIcons({ HeroPlus, HeroRefresh, HeroArrowRight, HeroMinus }),
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],

})
export class ButtonModule { }
