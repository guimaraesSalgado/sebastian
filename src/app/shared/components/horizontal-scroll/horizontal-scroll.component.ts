import { Component, EventEmitter, Input, Output } from '@angular/core';

interface CarouselItem {
  title: string;
  description: string;
  image?: string;
  theme?: string;
  themeBadge?: string;
}

@Component({
  selector: 'app-s-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss'],
})
export class HorizontalScrollComponent {
  @Input() theme: 'card' | 'list' | 'revenue' = 'card';
  @Input() hasBadge: boolean = true;
  @Input() totalColumns: number = 2;
  @Input() set items(carouselItems: CarouselItem[]) {
    this.scrollItems = this.validateBadge(carouselItems);
  }

  // Config botao
  @Input() help?: string = 'Informe como criar listas aqui.';
  @Input() textButton?: string = 'Criar lista';
  @Output() actionButton = new EventEmitter<null>();

  scrollItems: CarouselItem[] = [];

  private validateBadge(items: CarouselItem[]): CarouselItem[] {
    return items.map(item => {
      switch (item.theme) {
        case 'sobremesa':
          return { ...item, themeBadge: 'primary' };
        case 'janta':
          return { ...item, themeBadge: 'secondary' };
        case 'almoço':
          return { ...item, themeBadge: 'tertiary' };
        default:
          return item;
      }
    });
  }

  getItemWidth(): string {
    return `calc(100% / ${this.totalColumns + 0.4})`;
  }

  onClick(): void {
    this.actionButton.emit();
  }
}
