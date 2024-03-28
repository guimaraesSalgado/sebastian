import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-s-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input() expanded: boolean = false;
}
