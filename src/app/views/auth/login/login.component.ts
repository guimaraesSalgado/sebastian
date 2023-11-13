import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;

  readonly form: FormGroup = this.buildForm();

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {}

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
