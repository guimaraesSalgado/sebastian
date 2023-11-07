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
      user: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, this.passwordValidator]],
    });
  }

  private passwordValidator(control: FormControl): ValidationErrors | null {
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
