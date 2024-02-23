import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-s-custom-error',
  templateUrl: './custom-error.component.html',
  styleUrls: ['./custom-error.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomErrorComponent {
  @Input() error: boolean = false;
  @Input() message: string = 'green';
  @Input() isActive: boolean = false;
}
