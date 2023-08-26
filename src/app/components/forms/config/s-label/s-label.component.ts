import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'se-label',
  templateUrl: './s-label.component.html',
  styleUrls: ['./s-label.component.scss'],
})
export class SeLabelComponent {
  @Input() id: string = '';
  @Input() target: string = '';
  @Input() value: string = '';
  @Input() required: boolean = false;
  @Input() tooltipPosition = 'top';
  @Input() ngClass: string = '';
  // @Input() tooltip: string;
}
