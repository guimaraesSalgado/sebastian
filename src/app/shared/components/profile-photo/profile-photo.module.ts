import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePhotoComponent } from './profile-photo.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ProfilePhotoComponent],
  exports: [ProfilePhotoComponent],
})
export class ProfilePhotoModule { }
