import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-s-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input() theme: 'create-list' | ''  = '';

  @Input() showCounter: boolean = true;
  @Input() steps: string[] = [];

  currentStep: number = 0;

  goToStep(index: number) {
    const newIndex = this.currentStep + index;

    if (newIndex >= 0 && newIndex < this.steps.length) {
      this.currentStep = newIndex;
      console.log(`Navegando para o passo ${this.currentStep + 1}`);
    }
  }
}
