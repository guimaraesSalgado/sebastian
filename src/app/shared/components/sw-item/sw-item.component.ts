import { Component, Input } from '@angular/core';
import { CardThemeService } from '../cards/card-list/card-theme.service';


@Component({
  selector: 'app-s-sw-item',
  templateUrl: './sw-item.component.html',
  styleUrls: ['./sw-item.component.scss']
})
export class SWItemComponent {
  @Input() items: any[] = [];

  actionButtonPosition: { [key: number]: number | null } = {};
  isActionButtonVisible: boolean = false;

  constructor(private cardThemeService: CardThemeService) {}

  getHeaderStyle(theme: string): any {
    const themeColors = this.cardThemeService.getTheme(theme) || { backgroundColor: '', color: '' };
      return this.getStyle(themeColors);
  }

  private getStyle(themeColors: any): any {
    return {
      'color': themeColors.color
    };
  }

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
