import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { PageComponent } from 'src/app/layouts/page/page.component';
import { HomeComponent } from './home/home.component';
import { ButtonCreateListComponent } from './components/button-create-list/button-create-list.component';
import { ButtonCreateRevenueComponent } from './components/button-create-revenue/button-create-revenue.component';

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    ButtonCreateListComponent,
    ButtonCreateRevenueComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    LoadingModule.forRoot()
  ]
})
export class PageModule { }
