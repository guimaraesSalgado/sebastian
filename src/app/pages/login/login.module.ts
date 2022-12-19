import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { LoginComponent } from './login.component';

import { FieldsModule } from 'src/app/shared/components/fields/input.module';
import { NotFoundComponent } from 'src/app/shared/pages/not-found/not-found.component';
import { FormComponent } from './shared/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {

  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FieldsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,

    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    FormComponent
  ],
  exports: [RouterModule]
})
export class LoginModule { }
