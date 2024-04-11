import { Component } from '@angular/core';


@Component({
  selector: 'app-s-sw-item',
  templateUrl: './sw-item.component.html',
  styleUrls: ['./sw-item.component.scss']
})
export class SWItemComponent {
  items: any[] = [
    { id: 1, title: 'Menu de Café da Manhã', description: 'Café da manhã dessa semana.', active: false , icon: 'heroCake'},
    { id: 2, title: 'Compras do mês', description: null, active: false , icon: 'heroInbox'},
    { id: 3, title: 'Almoço aniversário', description: 'Itens para o aniversário da Betania', active: false, icon: 'heroCake' },
    { id: 1, title: 'Menu de Café da Manhã', description: 'Café da manhã dessa semana.', active: false , icon: 'heroCake'},
    { id: 2, title: 'Compras do mês', description: null, active: false , icon: 'heroInbox'},
    { id: 3, title: 'Almoço aniversário', description: 'Itens para o aniversário da Betania', active: false, icon: 'heroCake' },
    { id: 1, title: 'Menu de Café da Manhã', description: 'Café da manhã dessa semana.', active: false , icon: 'heroCake'},
    { id: 2, title: 'Compras do mês', description: null, active: false , icon: 'heroInbox'},
    { id: 3, title: 'Almoço aniversário', description: 'Itens para o aniversário da Betania', active: false, icon: 'heroCake' }
  ];

  actionButtonPosition: { [key: number]: number | null } = {};
  isActionButtonVisible: boolean = false;

  onTouchStart(event: TouchEvent, itemId: number): void {
    this.isActionButtonVisible = true;
    this.actionButtonPosition[itemId] = null;
    this.items.forEach(item => {
      item.active = false;
    });
    this.items.find(item => item.id === itemId).active = true;
  }

  onTouchMove(event: TouchEvent, itemId: number): void {
    const touchX = event.touches[0].clientX;
    this.actionButtonPosition[itemId] = Math.min(Math.max(touchX - 80, -80), 0);
  }

  onTouchEnd(event: TouchEvent, itemId: number): void {
    this.isActionButtonVisible = false;
    this.items.find(item => item.id === itemId).active = false;
    this.actionButtonPosition[itemId] = null;
  }

  onItemClick(item: any): void {
    console.log('Item clicked:', item);
  }

  onActionClick(item: any): void {
    console.log('Action clicked for item:', item);
  }
}
