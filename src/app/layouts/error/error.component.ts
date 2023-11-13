import { OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(
    private router: Router,
    private platform: Platform,
  ){}

  ngOnInit(): void {
    this.validePlataformAndNavigate();
  }

  private validePlataformAndNavigate(): void {
    if(this.isMobile()){
      this.router.navigate(['/']);
    }
  }

  isMobile(): boolean {
    return this.platform.ANDROID || this.platform.IOS;
  }
}
