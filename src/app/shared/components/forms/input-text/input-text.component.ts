import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation, SkipSelf, ChangeDetectorRef } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SeInputComponent } from '../input.component';

const CONTROL_CONTAINER_USE_FACTORY = (container: ControlContainer) => container;

@Component({
  selector: 'app-s-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
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
export class InputTextComponent extends SeInputComponent {
  @Input() set inputType(type: string) {
    this.type = type;
    if (type === 'password') {
      this.showPassword = true;
    }
  }

  @Input() set disableMessageError(disable: boolean) {
    this.messageError = disable;
  }

  @Input() minlength: number = 0;
  @Input() maxlength: number = 10;
  @Input() placeholder = '';
  @Input() prefix: string = '';
  @Input() suffix: string = '';
  @Input() autofocus = 'on';
  @Input() nativeType = 'text';
  @Input() index = null;
  @Input() override styleClass: string = '';

  @Input() characterPattern = '[A-Za-z]';
  @Input() slotChar = '_';
  @Input() autoClear = true;

  // tslint:disable-next-line:no-output-native
  @Output() focus = new EventEmitter<any>();

  // tslint:disable-next-line:no-output-native
  @Output() blur = new EventEmitter<any>();

  colors: string = '';
  type: string = 'text';
  showPassword: boolean = false;
  messageError: boolean = false;
  isPassword: boolean = false;

  constructor(override controlContainer: ControlContainer, private cdr: ChangeDetectorRef) {
    super(controlContainer);
  }

  toggleShowPassword(): void {
    this.isPassword = !this.isPassword;
    this.cdr.detectChanges()
    const newType = this.isPassword ? 'text' : 'password';
    this.type = newType;
  }
}
