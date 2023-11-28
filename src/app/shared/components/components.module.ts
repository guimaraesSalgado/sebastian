import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { CarouselModule } from './carousel/carousel.module';
import { InputModule } from './forms/input.module';
import { GreetingTextModule } from './greeting-text/greeting-text.module';
import { HeaderModule } from './header/header.module';
import { LoadingModule } from './loading/loading.module';
import { ProfilePhotoModule } from './profile-photo/profile-photo.module';
import { SidebarModule } from './sidebar/sidebar.module';

const COMPONENTS_MODULES = [
  ButtonModule,
  CarouselModule,
  InputModule,
  GreetingTextModule,
  HeaderModule,
  LoadingModule,
  ProfilePhotoModule,
  SidebarModule
];

@NgModule({
  imports: COMPONENTS_MODULES,
  declarations: [],
  exports: COMPONENTS_MODULES,
  providers: [],
})
export class ComponentsModule { }
