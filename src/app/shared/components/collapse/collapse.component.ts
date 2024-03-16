import { AUTO_STYLE, animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, ElementRef, ViewChild } from '@angular/core';

const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-s-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})
export class CollapseComponent {

  @Input() set isCollapsed(value: boolean){
    this.collapsed = value
  }

  @Input() title: string = 'Title';
  @Input() noDescription: boolean = false;
  @Input() description: string = 'Description';
  @ViewChild('collapseContent') collapseContent!: ElementRef;

  collapsed: boolean = false

  constructor() {}

  toggle() {
    this.collapsed = !this.collapsed;
  }

  collapse() {
    this.collapsed = true;
  }
}
