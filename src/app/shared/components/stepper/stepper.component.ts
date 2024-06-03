import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { StepComponent } from './step/step.component';

@Component({
  selector: 'app-s-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterContentInit {
  @ContentChildren(StepComponent) children!: QueryList<StepComponent>;
  @Input() namesSteps: string[] = [];
  @Input() showCounter: boolean = true;

  currentStep: number = 0;
  transformStyle: string = 'translateX(0)';
  stepCount: number = 0;

  constructor() {}

  ngAfterContentInit(): void {
    this.stepCount = this.children.length;
  }

  setStep(index: number) {
    if (index >= 0 && index < this.stepCount) {
      this.currentStep = index;
      this.updateTransformStyle();
    }
  }

  nextStep(): void {
    if (this.currentStep < this.stepCount - 1) {
      this.currentStep++;
      this.updateTransformStyle();
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.updateTransformStyle();
    }
  }

  restart(): void {
    this.currentStep = 0;
    this.updateTransformStyle();
  }

  private updateTransformStyle(): void {
    this.transformStyle = `translateX(-${this.currentStep * (100 / this.stepCount)}%)`;
  }
}
