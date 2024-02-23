import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-s-bagde',
  templateUrl: './bagde.component.html',
  styleUrls: ['./bagde.component.scss']
})
export class BadgeComponent {
  @Input() theme: 'default' | 'topic' | 'icon'  = 'topic';
  @Input() text: string = 'S bagde';
  @Input() color: string = '#007bff';
}
