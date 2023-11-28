import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoadingService } from "src/app/shared/components/loading/loading.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  readonly form: FormGroup = this.buildForm();

  constructor(
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required]],
      user: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, this.passwordValidator]],
    });
  }

  logInto(): void {
    this.loadingService.show();
    setTimeout(() => {
      this.loadingService.hide()
      this.router.navigate(['/auth/welcome'])
    }, 2000);
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
