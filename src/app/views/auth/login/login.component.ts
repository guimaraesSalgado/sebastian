import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;

  readonly form: FormGroup = this.buildForm();

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      user: [null],
      password: [null,[this.passwordValidator]],
    });
  }

  loginWithGoogle(): void {
    // console.log(FormUtils.setPasswordValidator(this.form.get('password')))
    // FormUtils.setPasswordValidator(this.form)
    // Aqui você pode adicionar a lógica para iniciar o processo de login com o Google
    // Normalmente, você usaria uma biblioteca ou serviço OAuth2 para fazer isso
  }

  passwordValidator(control: FormControl): ValidationErrors | null {
    const value: string = control.value;
    if (value?.length < 8) {
      return { minLength: true };
    }
    if (!/[A-Z]/.test(value)) {
      return { uppercaseLetter: true };
    }
    if (!/[a-z]/.test(value)) {
      return { lowercaseLetter: true };
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value)) {
      return { specialCharacter: true };
    }

    return null;
  }

}
