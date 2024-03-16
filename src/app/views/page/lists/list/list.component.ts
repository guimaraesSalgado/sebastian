import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition('in => out', animate('0.5s ease-out')),
      transition('out => in', animate('0.5s ease-in'))
    ])
  ]
})
export class ListComponent {
isCollapsed = true;
currentStep: number = 0;
animationState: string = 'in';


nextStep(): void {
  if (this.currentStep < 1) {
    this.animationState = 'out';
    setTimeout(() => {
      this.currentStep++;
      this.animationState = 'in';
    }, 500);
  }
}

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
