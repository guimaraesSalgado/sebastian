import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-s-step-progress-bar',
  templateUrl: './step-progress-bar.component.html',
  styleUrls: ['./step-progress-bar.component.scss']
})
export class StepProgressBarComponent {
  steps: { title: string, icon: string }[] = [
    { title: 'Step 1 Title', icon: 'Step 1 Description' },
    { title: 'Step 2 Title', icon: 'Step 2 Description' },
    { title: 'Step 3 Title', icon: 'Step 3 Description' },
    { title: 'Step 4 Title', icon: 'Step 4 Description' }
  ];  currentStep: number = 0;


  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  calculateProgressBarWidth(): string {
    const progress = ((this.currentStep + 1) / this.steps.length) * 100;
    return progress + '%';
  }
}
