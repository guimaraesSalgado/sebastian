import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-s-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent {
  @Input() isCollapsed: boolean = true;
  @Input() title: string = 'Title';
  @Input() noDescription: boolean = false;
  @Input() description: string = 'Description';
}
