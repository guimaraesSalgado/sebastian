import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { CommonModule } from '@angular/common';

import { SwipeAngularListModule } from 'swipe-angular-list';

import { SWItemComponent } from './sw-item.component';
import { HeroPencilAlt, HeroTrash } from '@ng-icons/heroicons/outline';

@NgModule({
  imports: [
    CommonModule,

    SwipeAngularListModule,
    NgIconsModule,
    NgIconsModule.withIcons({
      HeroPencilAlt,
      HeroTrash
     }),
  ],
  declarations: [SWItemComponent],
  exports: [SWItemComponent],
})
export class SWItemModule { }
