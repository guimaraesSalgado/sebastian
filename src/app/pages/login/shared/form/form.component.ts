import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { identity, pickBy } from 'lodash';

@Component({
  selector: 'login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() enter = new EventEmitter<any>();

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  onEnter(value: any): void {
    if (this.form.valid && value.keyCode === 13) {
      this.enter.emit(this.accessForm);
    }
  }

  onAccess(): void{
    if (this.form.valid) {
      this.enter.emit(this.accessForm);
    }
  }

  get accessForm(): Partial<any> {
    return pickBy(this.form.value, identity);
  }
}
