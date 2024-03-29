import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent {
  readonly form: FormGroup = this.buildForm();

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  isFormValid(): boolean {
    return this.form.valid
  }

  clearForm(): void {
    this.form.reset();
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      toggleControl: [null, [Validators.required]],
    });
  }
}
