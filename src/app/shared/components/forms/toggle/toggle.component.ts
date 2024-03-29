import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-s-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true,
    },
  ],
})
export class ToggleComponent implements ControlValueAccessor {
  @Input() set disableMessageError(disable: boolean) {
    this.messageError = disable;
  }
  @Input() name = '';
  @Input() label: string = '';
  @Input() id: string = '';

  isChecked: boolean = false;
  messageError: boolean = false;
  required: boolean = false; // Adicionando propriedade 'required'

  onChange: any = () => {};
  onTouched: any = () => {};

  toggle(): void {
    this.isChecked = !this.isChecked;
    this.onChange(this.isChecked); // Notificar o formulário sobre a mudança de valor
    this.onTouched(); // Notificar o formulário que o controle foi tocado
  }

  // Implementação dos métodos da interface ControlValueAccessor
  writeValue(value: any): void {
    this.isChecked = !!value; // Converter para booleano
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implementar lógica de desabilitar o componente se necessário
  }

  // Método para calcular a obrigatoriedade com base na presença do label
  calculateRequired(): void {
    this.required = !!this.label;
  }
}
