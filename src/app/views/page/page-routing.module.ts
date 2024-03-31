import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewComponent } from './lists/new/new/new.component';
import { MyComponent } from './lists/my/my.component';
import { PageComponent } from 'src/app/layouts/page/page.component';
import { InternalPageComponent } from 'src/app/layouts/internal-page/internal-page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'new', component: NewComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  {
    path: 'list',
    component: InternalPageComponent,
    children: [
      { path: 'my-list', component: MyComponent },
    ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PageRoutingModule { }
