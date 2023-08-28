import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  readonly form: FormGroup = this.buildForm();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void { }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required]],
      user: [null, [Validators.required]],
      password: [null, [Validators.required, this.passwordValidator]],
    });
  }

  private passwordValidator(control: FormControl): ValidationErrors | null {
    const value: string = control.value;
    if (!/[A-Z]/.test(value)) {
      return { uppercaseLetter: true };
    }
    if (!/[a-z]/.test(value)) {
      return { lowercaseLetter: true };
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value)) {
      return { specialCharacter: true };
    }

    if (value?.length < 8) {
      return { minLength: true };
    }

    return null;
  }
}
