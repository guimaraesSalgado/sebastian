import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor } from '@angular/forms';
import camelCase from 'lodash/camelCase';

@Component({
  template: ''
})

export abstract class RoleInputComponent implements ControlValueAccessor, OnInit {
  @HostBinding('class') hostClass = 'p-col';

  @Input() name = '';
  @Input() label: string;
  @Input() value: string | number;
  @Input() model: any = '';
  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() tooltip: string;

  // tslint:disable-next-line:no-input-rename
  @Input('class') styleClass: string;

  @Output() modelChange = new EventEmitter<any>();

  control: AbstractControl;

  private _id: string;
  private _formControlName: string;

  constructor(protected controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.controlContainer) {
      if (this.formControlName) {
        this.control = this.controlContainer.control.get(this.formControlName);
      } else {
        console.warn('Missing FormControlName directive from host element of the component');
      }
    } else {
      console.warn('Can not find parent FormGroup directive');
    }

    if (this.value && !this.model) {
      this.model = this.value;
    }
  }

  @Input()
  set id(id: string) {
    this._id = id;
    this._formControlName = camelCase(id);
  }

  get id(): string {
    return this._id;
  }

  @Input()
  set formControlName(value: string) {
    this._formControlName = value;
  }

  get formControlName(): string {
    return this._formControlName;
  }

  writeValue(value: any): void {
    this.model = value;
  }

  registerOnChange(fn: any): void {
    this.controlChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.controlTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private controlChange: () => void = () => {
    // ...
  };

  private controlTouch: () => void = () => {
    // ...
  };
}
