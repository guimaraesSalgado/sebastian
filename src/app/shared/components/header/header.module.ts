import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],

})
export class HeaderModule { }
