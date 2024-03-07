import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FormUtils } from "src/app/core/utils";

import { LoadingService } from "src/app/shared/components/loading/loading.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.scss']

})
export class LoginComponent {
  showPassword: boolean = false;

  readonly form: FormGroup = this.buildForm();

  constructor(
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  isFormValid(): boolean {
    return this.form.valid
  }

  logInto(): void {
     if (this.isFormValid()) {
      this.loadingService.show();
      setTimeout(() => {
        this.loadingService.hide()
        this.router.navigate(['/sebastian/home'])
      }, 2000);
    }
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      user: [null, [Validators.required, FormUtils.emailValidator()]],
      password: [null, [Validators.required]],
    });
  }
}
