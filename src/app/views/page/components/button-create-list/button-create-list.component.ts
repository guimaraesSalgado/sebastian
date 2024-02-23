import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-create-list',
  templateUrl: './button-create-list.component.html',
  styleUrls: ['./button-create-list.component.scss']
})
export class ButtonCreateListComponent {
  @Input() size: 'normal' | 'full' = 'normal';
  loading: boolean = false;
}
