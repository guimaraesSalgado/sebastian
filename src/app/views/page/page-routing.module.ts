import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from 'src/app/layouts/auth/auth.component';

import { HomeComponent } from './home/home.component';

import { ListComponent } from './lists/list/list.component';
import { WelcomeComponent } from '../auth/welcome/welcome.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { PageComponent } from 'src/app/layouts/page/page.component';

const routes: Routes = [
   {
    path: "sebastian",
    component: PageComponent,
    children: [
      { path: "welcome", component: WelcomeComponent },
      { path: "home", component: HomeComponent },
      { path: "list", component: ListComponent },
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
  { path: "", redirectTo: "auth", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PageRoutingModule { }
