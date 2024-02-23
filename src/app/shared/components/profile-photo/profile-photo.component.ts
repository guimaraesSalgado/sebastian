import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-s-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss']
})
export class ProfilePhotoComponent {
  @Input() profilePhoto: string = '/assets/img/icon/user.svg'
  @Input() type: 'big' | 'medium' | 'small' = 'medium';

  getContainerSize(): string {
    switch (this.type) {
      case 'big':
        return '200px';
      case 'medium':
        return '100px';
      case 'small':
        return '50px';
      default:
        return '100px';
    }
  }

  hasProfilePhoto(): boolean {
    return !!this.profilePhoto;
  }
}
