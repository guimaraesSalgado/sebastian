import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';

import { HomeComponent } from './views/page/home/home.component';
import { ErrorComponent } from './layouts/error/error.component';
import { PageComponent } from './layouts/page/page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule),
    canActivate: [],
  },
  {
    path: "page",
    component: PageComponent,
    children: [
      { path: "home", component: HomeComponent },
    ],
  },
  {
    path: "error",
    component: ErrorComponent,
  },

  { path: "", component: IndexComponent },
  { path: "", redirectTo: "auth", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
