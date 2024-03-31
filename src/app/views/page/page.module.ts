import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { PageRoutingModule } from './page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageComponent } from 'src/app/layouts/page/page.component';
import { InternalPageComponent } from 'src/app/layouts/internal-page/internal-page.component';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';

import { NewComponent } from './lists/new/new/new.component';
import { FormListComponent } from './lists/new/form-create/form-list/form-list.component';
import { FormItemComponent } from './lists/new/form-create/form-item/form-item.component';

import { MyComponent } from './lists/my/my.component';
import { FilterComponent } from './lists/my/shared/filter/filter.component';
import { SwipeAngularListModule } from 'swipe-angular-list';


@NgModule({
  declarations: [
    PageComponent,
    InternalPageComponent,
    HomeComponent,
    NewComponent,

    MyComponent,
    FilterComponent,

    FormListComponent,
    FormItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SwipeAngularListModule,
    RouterModule,
    ReactiveFormsModule,
    PageRoutingModule,
    SharedModule,
    LoadingModule.forRoot()
  ]
})
export class PageModule { }
