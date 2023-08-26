import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  readonly form: FormGroup = this.buildForm();

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      user: [null],
      password: [null],
    });
  }
}
