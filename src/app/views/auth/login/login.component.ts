import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoadingService } from "src/app/components/loading/loading.service";

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
    private loadingService: LoadingService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logInto(): void {
    this.loadingService.show();
    setTimeout(() => {
      this.loadingService.hide()
      this.router.navigate(['/home'])
    }, 2000);
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}
