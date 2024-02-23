import { Component  , Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements AfterViewInit {
  showSquare: boolean = false;
  backgroundColor: string = 'rgb(255, 255, 255)';
  private readonly primaryColor = 'rgb(155 6 218)';

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.backgroundColor = this.primaryColor;
      this.showSquare = true;
      this.animateSquare();
    }, 2000);
  }

  private animateSquare(): void {
    const insertNewDiv = this.elementRef.nativeElement.querySelector('#square');
    if (insertNewDiv) {
      this.renderer.addClass(insertNewDiv, 'show-s');
    }
    this.navigateToHome();
  }

  private navigateToHome(): void {
    setTimeout(() => {
      this.router.navigate(['/sebastian/home']);
    }, 4000);
  }
}
