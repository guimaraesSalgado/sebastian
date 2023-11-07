import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.scss']

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
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  loginWithGoogle(): void {
    console.log(this.form)
    // console.log(FormUtils.setPasswordValidator(this.form.get('password')))
    // FormUtils.setPasswordValidator(this.form)
    // Aqui você pode adicionar a lógica para iniciar o processo de login com o Google
    // Normalmente, você usaria uma biblioteca ou serviço OAuth2 para fazer isso
  }

}
