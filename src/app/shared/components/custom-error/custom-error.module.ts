import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';

import { CustomErrorComponent } from './custom-error.component';
import { HeroInformationCircle } from '@ng-icons/heroicons/outline';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NgIconsModule,
    NgIconsModule.withIcons({ HeroInformationCircle }),
  ],
  declarations: [CustomErrorComponent],
  exports: [CustomErrorComponent],
})
export class CustomErrorModule { }
