import { Component, ChangeDetectorRef } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private platform: Platform,
    private cdr: ChangeDetectorRef
  ){
    this.validePlataformAndNavigate();
  }

  private validePlataformAndNavigate(): void {
    // if(!this.isMobile()){
    //   this.router.navigate(['/error']);
    // }
  }

  isMobile(): boolean {
    return this.platform.ANDROID || this.platform.IOS;
  }
}
