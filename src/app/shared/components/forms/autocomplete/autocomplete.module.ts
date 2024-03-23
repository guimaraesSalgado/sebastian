import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroRefresh, HeroSearch } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';

import { AutocompleteComponent } from './autocomplete.component';
import { ErrorModule } from '../config/error/error.module';
import { SeLabelModule } from '../config/label/label.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ErrorModule,
    SeLabelModule,
    NgIconsModule,
    NgIconsModule.withIcons({ HeroSearch, HeroRefresh }),
  ],
  declarations: [AutocompleteComponent],
  exports: [AutocompleteComponent],

})
export class AutocompleteModule { }
