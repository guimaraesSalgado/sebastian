import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { LoadingService } from "src/app/shared/components/loading/loading.service";
import { FormUtils } from "src/app/core/utils";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  passwordErrors: boolean[] = [];
  isActive: boolean = false;

  readonly form: FormGroup = this.buildForm();

  constructor(
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private router: Router,
  ) {
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, [Validators.required]],
      user: [null, [Validators.required, FormUtils.emailValidator()]],
      password: [null, [Validators.required, FormUtils.passwordValidator]],
    });
  }

  isFormValid(): boolean {
    return this.form.valid
  }

  logInto(): void {
    if (this.isFormValid()) {
      this.loadingService.show();
      setTimeout(() => {
        this.loadingService.hide()
        this.router.navigate(['/page/welcome'])
      }, 2000);
    }
  }

  onFocus(): void {
    this.isActive = true;
  }

  onBlur(): void {
    this.isActive = false;
  }

  validatePassword(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    this.passwordErrors = [];
    this.passwordErrors[0] = value.length < 8; //Valida quantidade
    this.passwordErrors[1] = this.validateSpecialSharacter(value);
  }

  private validateSpecialSharacter(value: string): boolean {
    return !/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value);
  }
}
