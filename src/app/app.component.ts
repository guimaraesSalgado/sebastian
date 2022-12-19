import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private router: Router,
  ){}

  ngOnInit(): void {
    // this.validateAccessPlatform()
  }

  validateAccessPlatform(): void {
    if(this.platform.IOS || this.platform.ANDROID){
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['**']);

    }
  }
}
