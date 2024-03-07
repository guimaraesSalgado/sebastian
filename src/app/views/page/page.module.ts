import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { PageRoutingModule } from './page-routing.module';
import { ListComponent } from './lists/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageComponent } from 'src/app/layouts/page/page.component';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { ButtonCreateListComponent } from './components/button-create-list/button-create-list.component';
import { ButtonCreateRevenueComponent } from './components/button-create-revenue/button-create-revenue.component';
import { FormListComponent } from './lists/form-create/form-list/form-list.component';
import { FormItemComponent } from './lists/form-create/form-item/form-item.component';

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    ListComponent,
    ButtonCreateListComponent,
    ButtonCreateRevenueComponent,

    FormListComponent,
    FormItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    PageRoutingModule,
    SharedModule,
    LoadingModule.forRoot()
  ]
})
export class PageModule { }
