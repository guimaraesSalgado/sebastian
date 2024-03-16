import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { ITENS_APRESENTACAO } from "./welcome.constants";
import { HorizontalScroll } from "src/app/shared/components/horizontal-scroll/horizontal-scroll.interface";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ['./welcome.component.scss']

})
export class WelcomeComponent {
  itensCarousel: HorizontalScroll[] = ITENS_APRESENTACAO
  currentIndex: number = 0;

  constructor(private router: Router){}

  toJump(): void {
    this.router.navigate(['/page/home'])
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.itensCarousel.length - 1;
    }
  }

  next(): void {
    if(this.currentIndex === 2) {
      this.toJump();
      return;
    }

    if (this.currentIndex < this.itensCarousel.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  getTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  getCurrentItemImage(): string {
    return this.itensCarousel.map(item => item.image.url)[this.currentIndex];
  }
}
