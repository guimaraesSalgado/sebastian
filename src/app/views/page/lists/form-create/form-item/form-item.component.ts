import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent {
  readonly form: FormGroup = this.buildForm();

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  isFormValid(): boolean {
    return this.form.valid
  }

  clearForm(): void {
    console.log('entrou')
    this.form.reset();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required]],
      measure: [null, [Validators.required]],
      quantity: [null, [Validators.required, Validators.maxLength(4)]],
      category: [null, [Validators.required]],
    });
  }

}
