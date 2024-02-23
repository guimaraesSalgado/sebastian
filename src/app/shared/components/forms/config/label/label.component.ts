import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-s-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent {
  @Input() id: string = '';
  @Input() target: string = '';
  @Input() value: string = '';
  @Input() required: boolean = false;
  @Input() tooltipPosition = 'top';
  @Input() ngClass: string = '';
  // @Input() tooltip: string;
}
