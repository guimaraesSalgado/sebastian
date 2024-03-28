import { Component, ViewChild } from '@angular/core';
import { CollapseComponent } from 'src/app/shared/components/collapse/collapse.component';
import { StepperComponent } from 'src/app/shared/components/stepper/stepper.component';
import { FormListComponent } from '../form-create/form-list/form-list.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @ViewChild('collapseContent', { static: false }) collapseContent!: CollapseComponent;
  @ViewChild(FormListComponent) formList!: FormListComponent;


  isCollapsed = true;
  currentStep: number = 0;

  closedCollapse(stepper?: StepperComponent): void {
    if (stepper) {
      stepper.restart();
    }

    this.collapseContent.collapse();
  }

}
