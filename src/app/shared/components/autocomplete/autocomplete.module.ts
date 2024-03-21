import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';

import { HeroRefresh, HeroSearch } from '@ng-icons/heroicons/outline';
import { AutocompleteComponent } from './autocomplete.component';

@NgModule({
  imports: [
    CommonModule,

    NgIconsModule,
    NgIconsModule.withIcons({ HeroSearch, HeroRefresh }),
  ],
  declarations: [AutocompleteComponent],
  exports: [AutocompleteComponent],

})
export class AutocompleteModule { }
