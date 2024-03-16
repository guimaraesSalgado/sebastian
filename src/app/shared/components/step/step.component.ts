import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-s-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {

  //No momento é permitido dois botões em tela, sendo um inicial entre os steps e o outro para finalizar ações
  @Input() textButtons: string[] = ['Button 1', 'Button 2']

  @Input() theme: 'create-list' | ''  = '';
  @Input() showCounter: boolean = true;
  @Input() actionButton: boolean = true;
  @Input() steps: string[] = [];

  @Output() onAction = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<null>();

  currentStep: number = 0;

  action(): void {
    this.onAction.emit();
  }

  cancel(): void {
    this.currentStep = 0;
    this.onCancel.emit()
  }

  goToStep(index: number) {
    const newIndex = this.currentStep + index;

    if (newIndex >= 0 && newIndex < this.steps.length) {
      this.currentStep = newIndex;
    }
  }
}
