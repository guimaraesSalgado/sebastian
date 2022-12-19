import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  SkipSelf,
  ViewEncapsulation,
} from '@angular/core';
import { ControlContainer, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RoleInputComponent } from '../input.component';

@Component({
  selector: 'role-text',
  templateUrl: './role-text.component.html',
  styleUrls: ['./role-text.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RoleTextComponent),
      multi: true,
    },
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]],
    },
  ],
})
export class RoleTextComponent extends RoleInputComponent {
  @Input() icon: string;
  @Input() type: string;
  @Input() minlength: number;
  @Input() maxlength: number;
  @Input() placeholder = '';
  @Input() prefix: string;
  @Input() suffix: string;
  @Input() autoComplete = 'off';
  @Input() autofocus = 'on';
  @Input() nativeType = 'text';

  @Output() focus = new EventEmitter<any>();
  @Output() blur = new EventEmitter<any>();

  private _mask: string;

  constructor(protected controlContainer: ControlContainer) {
    super(controlContainer);
  }

  @Input()
  set mask(value: string) {
    let inputMask;

    if (inputMask) {
      this._mask = inputMask;
    } else {
      this._mask = value;
    }
  }

  get mask(): string {
    return this._mask;
  }
}
