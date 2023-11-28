import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { PageComponent } from 'src/app/layouts/page/page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LoadingModule.forRoot()
  ]
})
export class PageModule { }
