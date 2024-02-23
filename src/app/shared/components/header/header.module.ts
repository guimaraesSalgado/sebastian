import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { GreetingTextModule } from '../greeting-text/greeting-text.module';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    GreetingTextModule,
    SidebarModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],

})
export class HeaderModule { }
