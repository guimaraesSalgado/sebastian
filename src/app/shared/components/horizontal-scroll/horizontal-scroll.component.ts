import { Component, EventEmitter, Input, Output} from '@angular/core';

interface CarouselItem {
  title: string;
  description: string;
  image?: string;
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
  @Input() items: CarouselItem[] = [];

  // Config botao
  @Input() help?: string = 'Informe como criar listas aqui.'
  @Input() textButton?: string = 'Criar lista'
  @Output() actionButton = new EventEmitter<null>();


  getItemWidth(): string {
    return `calc(100% / ${this.totalColumns + 0.4})`;
  }

  onClick(): void {
    this.actionButton.emit();
  }
}
