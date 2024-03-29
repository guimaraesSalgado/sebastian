import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from './input-text/input-text.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { SelectModule } from './select/select.module';
import { InputQuantityModule } from './input-quantity/input-quantity.module';

@NgModule({
  imports: [CommonModule],
  declarations: [

  ],
  exports: [
    InputTextModule,
    InputQuantityModule,
    AutocompleteModule,
    SelectModule
  ],
})
export class InputModule {}
