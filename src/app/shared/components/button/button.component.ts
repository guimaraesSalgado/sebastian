import { Component, Input } from '@angular/core';
import { ButtonThemeService } from './button-theme.service';

@Component({
  selector: 'app-s-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() theme: string = ''; // Agora o padrão é uma string vazia
  @Input() type: 'dark' | 'light' | 'inline' = 'dark';
  @Input() disabled: boolean = false;
  @Input() icon: string = 'heroRefresh';
  @Input() loading: boolean = false;

  themeInfo: { icon: string; type: string } = { icon: 'heroPlus', type: 'dark' };

  constructor(private buttonThemeService: ButtonThemeService) {}

  ngOnInit() {
    this.updateThemeInfo();
  }

  private updateThemeInfo() {
    if (this.theme.trim() === '') {
      this.themeInfo = { icon: this.icon, type: this.type };
    } else {
      const themeData = this.buttonThemeService.getTheme(this.theme);
      if (themeData) {
        this.themeInfo = themeData;
      }
    }
  }

  getTypeClass(): string {
    return `type-${this.themeInfo.type}`;
  }
}
