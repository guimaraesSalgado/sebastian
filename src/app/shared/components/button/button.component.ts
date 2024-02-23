// button.component.ts

import { Component, Input } from '@angular/core';
import { ButtonThemeService } from './button-theme.service';

@Component({
  selector: 'app-s-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() theme: string = '';
  @Input() type: 'dark' | 'light' | 'inline' | 'link' = 'dark';
  @Input() disabled: boolean = false;
  @Input() icon: string = '';
  @Input() loading: boolean = false;
  @Input() size: 'normal' | 'full' = 'normal';

  themeInfo: { icon: string; type: string } = { icon: '', type: 'dark' };

  constructor(private buttonThemeService: ButtonThemeService) {}

  ngOnInit() {
    this.updateThemeInfo();
  }

  private async updateThemeInfo(): Promise<void> {
    if (this.theme.trim() === '') {
      this.themeInfo = { icon: this.icon, type: this.type };
    } else {
      try {
        const themeData = await this.buttonThemeService.getTheme(this.theme);
        if (themeData) {
          this.themeInfo = themeData;
        } else {
          this.themeInfo = { icon: this.icon, type: this.type };
        }
      } catch (error) {
        console.error('Erro ao obter dados do tema:', error);
      }
    }
  }

  showIcon(): boolean {
    return this.icon !== '' && !this.loading;
  }

  getTypeClass(): string {
    return `type-${this.themeInfo.type} ${this.size === 'full' ? 'full-size' : ''}`;
  }
}
