import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { HomeComponent } from './views/auth/home/home.component';

const routes: Routes = [
   // auth views
   {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "home", component: HomeComponent},
      { path: "login", component: LoginComponent},
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
    ],
  },

  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
