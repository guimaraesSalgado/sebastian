import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AuthModule } from './views/auth/auth.module';
import { ErrorComponent } from './layouts/error/error.component';
import { HeaderComponent } from './layouts/header/header.component';

import { HomeDashComponent } from './views/home-dash/home-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AuthComponent,
    ErrorComponent,
    HeaderComponent,

    HomeDashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
