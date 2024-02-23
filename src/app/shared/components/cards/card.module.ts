import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { NgIconsModule } from '@ng-icons/core';
import { HeroCake, HeroInbox, HeroShoppingCart } from '@ng-icons/heroicons/outline';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,

    NgIconsModule,
    NgIconsModule.withIcons({ HeroInbox, HeroShoppingCart, HeroCake }),
  ],
  declarations: [CardListComponent],
  exports: [CardListComponent],
})
export class CardModule { }
