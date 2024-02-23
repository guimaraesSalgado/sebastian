import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthComponent } from 'src/app/layouts/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule,
    HttpClientModule,
    LoadingModule.forRoot()
  ]
})
export class AuthModule { }
