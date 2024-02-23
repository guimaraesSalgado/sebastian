import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';

import { BadgeComponent } from './bagde.component';
import { HeroHeart } from '@ng-icons/heroicons/outline';

@NgModule({
  imports: [
    CommonModule,

    NgIconsModule,
    NgIconsModule.withIcons({ HeroHeart }),
  ],
  declarations: [BadgeComponent],
  exports: [BadgeComponent],

})
export class BagdeModule { }
