import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from 'src/app/layouts/auth/auth.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
   {
    path: "sebastian",
    children: [
      { path: "home", component: HomeComponent },
      { path: "welcome", component: WelcomeComponent },
    ],
  },
   {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
    ],
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AuthRoutingModule { }
