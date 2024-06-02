import { Component, EventEmitter, forwardRef, Input, Output, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true
    }
  ]
})
export class MultiSelectComponent implements ControlValueAccessor {

  @HostBinding('class') classHost = 'app-multi-select';

  @Input() options: any[] = [];
  @Input() placeholder = 'Escolha uma opção';
  @Input() disabled = false;

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onChange = new EventEmitter<any[]>();

  selectedOptions: any[] = [];
  isOpen = false;
  filterText = '';

  onTouched: () => void = () => {};
  onChangeFn: (value: any) => void = () => {};

  get selectedLabels(): string {
    return this.selectedOptions.map(option => option.label).join(', ');
  }

  toggleDropdown() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  selectOption(option: any) {
    if (!this.selectedOptions.includes(option)) {
      this.selectedOptions.push(option);
      this.onChange.emit(this.selectedOptions);
      this.onChangeFn(this.selectedOptions);
    }
  }

  removeOption(option: any) {
    const index = this.selectedOptions.indexOf(option);
    if (index > -1) {
      this.selectedOptions.splice(index, 1);
      this.onChange.emit(this.selectedOptions);
      this.onChangeFn(this.selectedOptions);
    }
  }

  writeValue(value: any): void {
    if (value) {
      this.selectedOptions = value;
    } else {
      this.selectedOptions = [];
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  filterOptions() {
    return this.options.filter(option => option.label.toLowerCase().includes(this.filterText.toLowerCase()));
  }
}
