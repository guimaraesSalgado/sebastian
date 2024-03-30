import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeroUser, HeroHome, HeroPencilAlt, HeroTicket } from '@ng-icons/heroicons/outline';

import { SidebarComponent } from './sidebar.component';
import { ProfilePhotoModule } from '../profile-photo/profile-photo.module';
import { PipesModule } from '../../pipes/pipes.module';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    PipesModule,
    ProfilePhotoModule,

    NgIconsModule,
    NgIconsModule.withIcons({ HeroHome, HeroUser, HeroPencilAlt, HeroTicket }),
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
  providers: [
    { provide: 'APP_VERSION', useValue: environment.version },
  ]

})
export class SidebarModule { }
