import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
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
      name: [null],
    });
  }
}
