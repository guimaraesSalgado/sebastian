import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/views/auth/auth.service";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ['./page.component.scss']

})
export class PageComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getUsers().subscribe(value => console.log(value))
  }
}
