import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { ButtonModule } from '../button/button.module';
import { NgIconsModule } from '@ng-icons/core';
import { HeroTrash } from '@ng-icons/heroicons/outline';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,

    NgIconsModule,
    NgIconsModule.withIcons({ HeroTrash }),
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent],

})
export class MenuModule { }
