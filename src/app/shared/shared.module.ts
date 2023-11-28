import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';

const COMPONENTS_MODULES = [
  ComponentsModule,
  PipesModule
];

@NgModule({
  imports: COMPONENTS_MODULES,
  declarations: [],
  exports: COMPONENTS_MODULES,
  providers: [],
})
export class SharedModule { }
