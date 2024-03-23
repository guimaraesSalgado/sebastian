import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from './input-text/input-text.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { SelectModule } from './select/select.module';

@NgModule({
  imports: [CommonModule],
  declarations: [

  ],
  exports: [
    InputTextModule,
    AutocompleteModule,
    SelectModule
  ],
})
export class InputModule {}
