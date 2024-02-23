import { AbstractControl, FormGroup, Validators, ValidatorFn, FormArray, FormControl, ValidationErrors } from '@angular/forms';

export class FormUtils {
  VALIDATORS_CALLBACK: (control: AbstractControl, field: string) => ValidatorFn | ValidatorFn[] | null = () => null;

  static resetValue(form: FormGroup | AbstractControl, fields = [], keepValidators = true): void {
    fields.forEach((field: string) => {
      const control = form.get(field);
      if (control) {
        control.setValue(null, { emitEvent: false });

        if (keepValidators) {
          control.setErrors(null, { emitEvent: false });
          control.clearValidators();
          control.updateValueAndValidity();
        }
      }
    });
  }

  static clearValidators(form: FormGroup | AbstractControl, fields = []): void {
    fields.forEach((field: string) => {
      const control = form.get(field);
      if (control) {
        control.clearValidators();
        control.updateValueAndValidity();
      }
    });
  }

  static disable(form: FormGroup | AbstractControl, fields = [], emitEvent = false): void {
    fields.forEach((field: string) => {
      const control = form.get(field);
      if (control && control.value) {
        control.disable({ emitEvent });
      }
    });
  }

  static enable(form: FormGroup | AbstractControl, fields = [], emitEvent = false): void {
    fields.forEach((field: string) => {
      const control = form.get(field);
      if (control && !control.value) {
        control.enable({ emitEvent });
      }
    });
  }

  static setValidators(
    form: FormGroup | AbstractControl,
    fields = [],
    validators: ValidatorFn | ValidatorFn[] | any,
    emitEvent = true,
  ): void {
    fields.forEach((field: string) => {
      const control = form.get(field);
      if (control) {
        control.setValidators(
          validators && typeof validators === 'function' ? validators(control, field) : validators,
        );
        control.updateValueAndValidity({ emitEvent });
      }
    });
  }

  static validate(form: FormGroup | FormArray): boolean {
    Object.values(form.controls).forEach((control: AbstractControl) => {
      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity({ emitEvent: true });

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.validate(control);
      }
    });

    return !form.invalid;
  }

  static setRequiredValidator(form: FormGroup | AbstractControl, fields = [], emitEvent = true): void {
    FormUtils.setValidators(form, fields, [Validators.required]);
  }

  static emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const email: string = control.value;

      if (!email) {
        return null;
      }

      const isEmailValid: boolean = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      return isEmailValid ? null : { 'email-invalid': { value: email } };
    };
  }

  static passwordValidator(control: FormControl): ValidationErrors | null {
    const value: string = control.value;
    let errorMessage: string = '';

    if (value?.length < 8) {
      errorMessage = 'A senha deve conter pelo menos 8 caracteres.';
    } else if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value)) {
      errorMessage = 'Use uma combinação de letras, números e caracteres especiais.';
    }

    return errorMessage ? { passwordError: errorMessage } : null;
  }

}
