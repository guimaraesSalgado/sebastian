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
  private _themeColorMappings: { [key: string]: string } = {};
  @Input() set themeColorMappings(value: { [key: string]: string }) {
    if (value) {
      this._themeColorMappings = value;
      this.updateScrollItems();
    }
  }
  get themeColorMappings(): { [key: string]: string } {
    return this._themeColorMappings;
  }

  @Input() set items(carouselItems: CarouselItem[]) {
    this.scrollItems = carouselItems ? this.validateBadge(carouselItems) : [];
  }

  @Input() help?: string = 'Informe como criar listas aqui.';
  @Input() textButton?: string = 'Criar lista';
  @Output() actionButton = new EventEmitter<null>();

  scrollItems: CarouselItem[] = [];

  private validateBadge(items: CarouselItem[]): CarouselItem[] {
    return items.map(item => {
      const themeBadge = this.themeColorMappings[item.theme!];
      return { ...item, themeBadge };
    });
  }

  private updateScrollItems(): void {
    this.scrollItems = this.validateBadge(this.scrollItems);
  }

  getItemWidth(): string {
    return `calc(100% / ${this.totalColumns + 0.4})`;
  }

  onClick(): void {
    this.actionButton.emit();
  }
}
