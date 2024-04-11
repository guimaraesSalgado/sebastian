import { Component, Input } from '@angular/core';

interface ListItem {
  id: number;
  title: string;
  subTitle: string;
  mark: boolean;
}

@Component({
  selector: 'app-s-sw-item',
  templateUrl: './sw-item.component.html',
  styleUrls: ['./sw-item.component.scss']
})
export class SWItemComponent {
  items: any[] = [
    { title: 'Item 1', description: 'nha' },
    { title: 'Item 2', description: null },
    { title: 'Item 3', description: 'nha' }
  ];

  actionButtonPosition: number | null = null; // posição do botão de ação (-80 para escondido, 0 para mostrado)

  onTouchStart(event: TouchEvent): void {
    this.actionButtonPosition = null; // reinicia a posição do botão de ação ao toque inicial
  }

  onTouchMove(event: TouchEvent): void {
    // obtém a posição do toque
    const touchX = event.touches[0].clientX;

    // calcula a posição do botão de ação com base no movimento do toque
    this.actionButtonPosition = Math.min(Math.max(touchX - 80, -80), 0);
  }

  onTouchEnd(event: TouchEvent): void {
    // reseta a posição do botão de ação após o toque final
    this.actionButtonPosition = null;
  }

  onItemClick(item: any): void {
    console.log('Item clicked:', item);
    // Aqui você pode adicionar a lógica para o que deseja fazer quando um item é clicado
  }

  onActionClick(item: any): void {
    console.log('Action clicked for item:', item);
    // Aqui você pode adicionar a lógica para o que deseja fazer quando o botão de ação é clicado
  }
}
