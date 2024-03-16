import { Component, ViewChild } from '@angular/core';
import { CollapseComponent } from 'src/app/shared/components/collapse/collapse.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @ViewChild('collapseContent', { static: false }) collapseContent!: CollapseComponent;

  isCollapsed = true;
  currentStep: number = 0;

  closedCollapse(): void {
    this.collapseContent.collapse();
  }
}
