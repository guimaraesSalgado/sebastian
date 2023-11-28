import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonThemeService {
  private themes = [
    { id: 'add', icon: 'heroPlus', type: 'dark' },
  ];

  getTheme(themeId: string) {
    return this.themes.find(theme => theme.id === themeId);
  }
}
