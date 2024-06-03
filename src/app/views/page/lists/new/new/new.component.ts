import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CollapseComponent } from 'src/app/shared/components/collapse/collapse.component';
import { StepperComponent } from 'src/app/shared/components/stepper/stepper.component';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { FormListComponent } from '../form-create/form-list/form-list.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  @ViewChild('collapseContent', { static: false }) collapseContent!: CollapseComponent;
  @ViewChild(FormListComponent) formList!: FormListComponent;

  constructor(
    private router: Router,
    private loadingService: LoadingService,
  ) { }

  isCollapsed = true;
  currentStep: number = 0;

  closedCollapse(stepper?: StepperComponent): void {
    if (stepper) {
      stepper.restart();
    }

    this.collapseContent.collapse();
  }

  navigateToMyList(): void {
      this.loadingService.show();
      setTimeout(() => {
        this.loadingService.hide()
        this.router.navigate(['/page/list/my-list'])
      }, 2000);
  }
}
