import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-create-revenue',
  templateUrl: './button-create-revenue.component.html',
  styleUrls: ['./button-create-revenue.component.scss']
})
export class ButtonCreateRevenueComponent {
  @Input() size: 'normal' | 'full' = 'normal';

  loading: boolean = false;
}
