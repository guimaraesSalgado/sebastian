import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule } from './input-text/input-text.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { SelectModule } from './select/select.module';
import { InputQuantityModule } from './input-quantity/input-quantity.module';
import { ToggleModule } from './toggle/toggle.module';
import { MultiSelectModule } from './multi-select/multi-select.module';

@NgModule({
  imports: [CommonModule],
  declarations: [

  ],
  exports: [
    AutocompleteModule,
    InputTextModule,
    InputQuantityModule,
    MultiSelectModule,
    SelectModule,
    ToggleModule
  ],
})
export class InputModule {}
