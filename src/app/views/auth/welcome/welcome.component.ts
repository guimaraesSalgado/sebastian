import { Component } from "@angular/core";
import { Carousel } from "src/app/shared/components/carousel/carousel.interface";

import { ITENS_APRESENTACAO } from "./welcome.constants";
import { Router } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ['./welcome.component.scss']

})
export class WelcomeComponent {
  itensCarousel: Carousel[] = ITENS_APRESENTACAO
  currentIndex: number = 0;

  constructor(private router: Router){}

  toAdvance(): void {
    const nextIndex = (this.currentIndex + 1) % this.itensCarousel.length;
    if (nextIndex !== 0) {
      this.currentIndex = nextIndex;
    } else {
      this.router.navigate(['/page/home'])
    }
  }
}
