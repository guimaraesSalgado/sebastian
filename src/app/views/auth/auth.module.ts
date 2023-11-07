import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SeInputModule } from 'src/app/components/forms/input.module';
import { ValidationMessageDirective } from './register/validation-message-directive.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ValidationMessageDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SeInputModule
  ]
})
export class AuthModule { }
