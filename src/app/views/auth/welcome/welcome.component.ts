import { Component } from "@angular/core";
import { Carousel } from "src/app/components/carousel/carousel.interface";

import { ITENS_APRESENTACAO } from "./welcome.constants";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ['./welcome.component.scss']

})
export class WelcomeComponent {

  itensCarousel: Carousel[] = ITENS_APRESENTACAO

  currentIndex: number = 0;

  toAdvance(): void {
    const nextIndex = (this.currentIndex + 1) % this.itensCarousel.length;
    if (nextIndex !== 0) { // Verifica se há mais itens no carrossel
      this.currentIndex = nextIndex;
    }
  }
}
