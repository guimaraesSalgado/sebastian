import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-s-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent {

  @Input() set isCollapsed(value: boolean){
    this.collapsed = value
  }

  @Input() title: string = 'Title';
  @Input() noDescription: boolean = false;
  @Input() description: string = 'Description';
  @ViewChild('collapseContent') collapseContent!: ElementRef;

  collapsed: boolean = true

  constructor() {}

  close(): void {
    this.collapsed = true;
  }
}
