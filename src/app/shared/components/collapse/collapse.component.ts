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
  @ViewChild('collapseContent') collapseContent!: ElementRef;
  @Input() set isCollapsed(value: boolean){
    this.collapsed = value
  }

  @Input() textButton: string = 'Clique aqui';

  collapsed: boolean = false

  toggle(): void {
    this.collapsed = !this.collapsed;
  }

  expand(): void {
    this.collapsed = false;
  }

  collapse(): void {
    this.collapsed = true;
  }
}
