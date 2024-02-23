import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { LoadingService } from './loading.service';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
  imports: [CommonModule]
})
export class LoadingModule {
  static forRoot(): ModuleWithProviders<LoadingModule> {
    return { ngModule: LoadingModule, providers: [LoadingService] }
  }
}
