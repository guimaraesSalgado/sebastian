import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CardThemeService } from './card-theme.service';
import { Card } from './card-list.interface';

interface ThemeColors {
  backgroundColor: string;
  color?: string;
}

@Component({
  selector: 'app-s-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  @Input() type: 'light' | 'dark' = 'light';
  @Input() items: Card[] = [];
  @Input() totalCardDisplay?: number;

  // Config botao
  @Input() help?: string = 'Informe como criar listas aqui.'
  @Input() textButton?: string = 'Criar lista'
  @Output() actionButton = new EventEmitter<null>();


  constructor(private cardThemeService: CardThemeService) {}

  getHeaderStyle(theme: string): any {
    const themeColors = this.cardThemeService.getTheme(theme) || { backgroundColor: '', color: '' };
    if (this.type === 'light') {
      return this.getLightStyle(themeColors);
    } else if (this.type === 'dark') {
      return this.getDarkStyle(themeColors);
    }
  }

  getIcon(theme: string): string {
    const themeData = this.cardThemeService.getTheme(theme);
    return themeData ? themeData.icon : '';
  }

  getColorTitle(theme: string): { [key: string]: string } {
    const themeColors = this.cardThemeService.getTheme(theme) || { color: '' };
    return this.type === 'dark' ? { 'color': themeColors.color } : {};
  }

  getDisplayedItems(): Card[] {
    return this.totalCardDisplay ? this.items.slice(0, this.totalCardDisplay) : this.items;
  }

  onClick(): void {
    this.actionButton.emit();
  }

  private getLightStyle(themeColors: ThemeColors): any {
    return {
      'background-color': themeColors.backgroundColor,
      'color': themeColors.color
    };
  }

  private getDarkStyle(themeColors: ThemeColors): any {
    return {
      'color': themeColors.color
    };
  }


}
