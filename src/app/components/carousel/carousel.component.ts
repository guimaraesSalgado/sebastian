import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Carousel } from './carousel.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class CarouselComponent {
  @Input() currentIndex: number = 0;
  @Input() carouselItems: Carousel[] = [
    {
      image: {
        url: 'https://via.placeholder.com/800x400',
        description: 'imagem exemplo'
      },
      subject: {
        title: 'Insira um título aqui!',
        description: 'E uma descrição para o seu carrossel.'
      }
    }
  ];

  @Output() nextSlideEvent = new EventEmitter<void>();

  changeSlide(index: number): void {
    this.currentIndex = index;

    setTimeout(() => {
      this.currentIndex = index;

      setTimeout(() => {
        this.currentIndex = index;
      }, 500);
    });
  }

  nextSlide(): void {
    const nextIndex = (this.currentIndex + 1) % this.carouselItems.length;
    this.nextSlideEvent.emit();
  }
}
