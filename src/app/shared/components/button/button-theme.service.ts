import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonThemeService {
  private themes = [
    { id: 'add', icon: 'heroPlus', type: 'dark' },
    { id: 'seeMore', icon: 'heroArrowLeft', type: 'light'}
  ];

  getTheme(themeId: string) {
    return this.themes.find(theme => theme.id === themeId);
  }
}
