import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  readonly form: FormGroup = this.buildForm();

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [null],
      user: [null],
      password: [null, [Validators.required]],
    });
  }

  teste(){
    console.log(this.form.get('password')?.errors)
  }
}
