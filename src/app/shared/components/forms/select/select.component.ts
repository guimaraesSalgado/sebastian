import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation, SkipSelf, ChangeDetectorRef } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SeInputComponent } from '../input.component';

const CONTROL_CONTAINER_USE_FACTORY = (container: ControlContainer) => container;

@Component({
  selector: 'app-s-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: CONTROL_CONTAINER_USE_FACTORY,
      deps: [[new SkipSelf(), ControlContainer]],
    },
  ],
})
export class SelectComponent extends SeInputComponent {
  @Input() set disableMessageError(disable: boolean) {
    this.messageError = disable;
  }

  @Input() selectOptions: string[] = [];
  @Input() placeholder = '';
  @Input() autofocus = 'on';
  @Input() index = null;

  @Input() slotChar = '_';

  @Output() focus = new EventEmitter<any>();
  @Output() blur = new EventEmitter<any>();

  messageError: boolean = false;

  constructor(override controlContainer: ControlContainer, private cdr: ChangeDetectorRef) {
    super(controlContainer);
  }

  // Método para associar o rótulo ao elemento select para melhor acessibilidade
  getAriaLabelledBy(): string | null {
    return this.label ? `${this.id}--label` : null;
  }
}
