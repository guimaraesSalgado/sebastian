import { Component, EventEmitter, forwardRef, Input, Output, HostListener, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SeInputComponent } from '../input.component';

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
export class MultiSelectComponent extends SeInputComponent {

  @HostBinding('class') classHost = 'app-multi-select';
  @Input() set disableMessageError(disable: boolean) {
    this.messageError = disable;
  }

  @Input() options: any[] = [];
  @Input() placeholder = 'Escolha uma opção';

  @Output() onChange = new EventEmitter<any[]>();

  selectedOptions: any[] = [];
  isOpen = false;
  filterText = '';
  messageError: boolean = false;

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
    const index = this.selectedOptions.findIndex(selected => selected.value === option.value);
    if (index > -1) {
      this.selectedOptions.splice(index, 1); // Remover opção se já estiver selecionada
    } else {
      this.selectedOptions.push(option); // Adicionar opção se não estiver selecionada
    }
    this.onChange.emit(this.selectedOptions);
    this.onChangeFn(this.selectedOptions);
  }

  filterOptions() {
    return this.options.filter(option => option.label.toLowerCase().includes(this.filterText.toLowerCase()));
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.multi-select-container')) {
      this.isOpen = false;
    }
  }

  onHeaderKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleDropdown();
      event.preventDefault();
    }
  }

  onInputKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isOpen = false;
    }
  }

  onOptionKeydown(event: KeyboardEvent, option: any) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.selectOption(option);
      event.preventDefault();
    }
  }

  getAriaLabelledBy(): string | null {
    return this.label ? `${this.id}--label` : null;
  }
}
