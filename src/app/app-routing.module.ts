import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './layouts/error/error.component';
import { PageComponent } from './layouts/page/page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule),
    canActivate: [],
  },
  {
    path: 'page',
    component: PageComponent,
    loadChildren: () => import('./views/page/page.module').then(m => m.PageModule),
    canActivate: [],
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
