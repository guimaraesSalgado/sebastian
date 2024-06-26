import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { CommonModule } from '@angular/common';

import { SWItemComponent } from './sw-item.component';
import { HeroPencilAlt, HeroTrash } from '@ng-icons/heroicons/outline';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,

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
