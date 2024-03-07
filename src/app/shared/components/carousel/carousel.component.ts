import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-s-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition('in => out', animate('0.5s ease-out')),
      transition('out => in', animate('0.5s ease-in'))
    ])
  ]
})
export class CarouselComponent {
  @Input() itemCount: number = 0;
  currentStep: number = 0;
  animationState: string = 'in';

  constructor() { }

  nextStep(): void {
    if (this.currentStep < this.itemCount - 1) {
      this.animationState = 'out';
      setTimeout(() => {
        this.currentStep++;
        this.animationState = 'in';
      }, 500);
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.animationState = 'out';
      setTimeout(() => {
        this.currentStep--;
        this.animationState = 'in';
      }, 500);
    }
  }
}
