import { Directive, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl } from '@angular/forms';
import { camelCase } from 'lodash';

@Directive() // Adicione o decorador @Directive() aqui
export abstract class SeInputComponent implements ControlValueAccessor, OnInit {
  @HostBinding('class') hostClass = 'p-col';

  @Input() name = '';
  @Input() label: string = '';
  @Input() value: string | number = '';
  @Input() model: any = '';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() tooltip: string = '';

  // tslint:disable-next-line:no-input-rename
  @Input('class') styleClass: string = '';

  @Output() modelChange = new EventEmitter<any>();

  // TODO: Melhorar tipagem
  control: any;

  private _id: string = '';
  private _formControlName: string = '';

  constructor(protected controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (this.controlContainer) {
      if (this.formControlName) {
        if (this.controlContainer.control) {
          const control = this.controlContainer.control.get(this.formControlName);
          if (control) {
            this.control = control;
          } else {
            console.warn(`FormControl "${this.formControlName}" not found in FormGroup`);
          }
        }
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
