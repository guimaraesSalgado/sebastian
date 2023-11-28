import { ChangeDetectorRef, Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-s-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ErrorComponent implements OnInit {
  @Input() control: FormControl = new FormControl();

  show: Observable<boolean> = of(false);

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.control) {
      this.control.statusChanges.subscribe(status => {
        const { invalid, touched, dirty } = this.control;
        this.show = of(invalid && (touched || dirty));
        this.cdr.detectChanges();
      });
    }
  }

  get text(): string | null {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && (this.control.touched || this.control.dirty)) {
        return this.findByErrorName(propertyName, this.control);
      }
    }

    return null;
  }

  findByErrorName(propertyName: string, control?: AbstractControl): string | null {
    let message: string | null = null;
    if ('required' === propertyName || 'empty' === propertyName) {
      message = 'Campo obrigatório.';
    } else if('minLength' === propertyName) {
      message = 'Quantidade de caracteres inválida.';
    } else if('uppercaseLetter' === propertyName) {
      message = 'Deve conter pelo menos uma letra maiúscula.';
    } else if('lowercaseLetter' === propertyName) {
      message = 'Deve conter pelo menos uma letra minúscula.';
    } else if('specialCharacter' === propertyName) {
      message = 'Deve conter pelo menos um caractere especial.';
    } else if('email' === propertyName) {
      message = 'Ops, o e-mail digitado esta incorreto. Tente novamente!.';
    }

    return message;
  }
}
