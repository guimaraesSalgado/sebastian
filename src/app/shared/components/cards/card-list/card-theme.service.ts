import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardThemeService {
  private themes = [
    { id: 'shop', backgroundColor: 'rgb(237, 233, 254)', color: 'rgb(87, 72, 174)', icon: 'heroShoppingCart'},
    { id: 'revenue', backgroundColor: 'rgb(254, 205, 211)', color: 'rgb(142, 67, 86)', icon: 'heroCake'},
    { id: 'info', backgroundColor: 'rgb(232, 249, 242)', color: 'rgb(17, 152, 96)', icon: 'heroInbox'}
    // Adicione mais temas conforme necessário
  ];

  getTheme(themeId: string) {
    return this.themes.find(theme => theme.id === themeId);
  }
}
