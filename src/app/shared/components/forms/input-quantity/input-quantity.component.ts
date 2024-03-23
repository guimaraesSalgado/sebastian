import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation, SkipSelf, ChangeDetectorRef } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SeInputComponent } from '../input.component';

const CONTROL_CONTAINER_USE_FACTORY = (container: ControlContainer) => container;

@Component({
  selector: 'app-s-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputQuantityComponent),
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
export class InputQuantityComponent extends SeInputComponent {
  @Input() set disableMessageError(disable: boolean) {
    this.messageError = disable;
  }

  @Input() minlength: number = 0;
  @Input() maxlength: number = 4;
  @Input() placeholder = '';
  @Input() prefix: string = '';
  @Input() suffix: string = '';
  @Input() autofocus = 'on';
  @Input() nativeType = 'text';
  @Input() index = null;

  @Input() characterPattern = '[A-Za-z]';
  @Input() slotChar = '_';
  @Input() autoClear = true;

  // tslint:disable-next-line:no-output-native
  @Output() focus = new EventEmitter<any>();

  // tslint:disable-next-line:no-output-native
  @Output() blur = new EventEmitter<any>();

  messageError: boolean = false;

  constructor(override controlContainer: ControlContainer, private cdr: ChangeDetectorRef) {
    super(controlContainer);
  }

  handreQtd(plus: boolean): void {
    if (!plus && this.control.value > 0) {
      this.control.setValue(this.control.value - 1);
    } else {
      this.control.setValue(this.control.value + 1);
    }
  }
}
