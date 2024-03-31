import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { HorizontalScrollModule } from './horizontal-scroll/horizontal-scroll.module';
import { InputModule } from './forms/input.module';
import { GreetingTextModule } from './greeting-text/greeting-text.module';
import { HeaderModule } from './header/header.module';
import { LoadingModule } from './loading/loading.module';
import { ProfilePhotoModule } from './profile-photo/profile-photo.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { CustomErrorModule } from './custom-error/custom-error.module';
import { CardModule } from './cards/card.module';
import { BagdeModule } from './bagde/bagde.module';
import { CollapseModule } from './collapse/collapse.module';
import { StepperModule } from './stepper/stepper.module';
import { MenuModule } from './menu/menu.module';
import { SWItemModule } from './sw-item/sw-item.module';

const COMPONENTS_MODULES = [
  BagdeModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  HorizontalScrollModule,
  CustomErrorModule,
  InputModule,
  GreetingTextModule,
  HeaderModule,
  LoadingModule,
  MenuModule,
  ProfilePhotoModule,
  SidebarModule,
  StepperModule,
  SWItemModule
];

@NgModule({
  imports: COMPONENTS_MODULES,
  declarations: [],
  exports: COMPONENTS_MODULES,
  providers: [],
})
export class ComponentsModule { }
