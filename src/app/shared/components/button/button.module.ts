import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { HeroArrowRight, HeroPlus, HeroRefresh, HeroMinus, HeroBell } from '@ng-icons/heroicons/outline';

import { ButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule,

    NgIconsModule,
    NgIconsModule.withIcons({ HeroPlus, HeroRefresh, HeroArrowRight, HeroMinus, HeroBell }),
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],

})
export class ButtonModule { }
