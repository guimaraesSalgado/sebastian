import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-s-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() links: { name: string, hasClick: boolean, theme: string }[] = [];
  @Input() width: number = 100;
  @Output() onAction: EventEmitter<string> = new EventEmitter<string>();

  isMenuOpen = false;
  isTransitioning = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.isTransitioning = true;

    setTimeout(() => {
      this.isTransitioning = false;
    }, 300);
  }

  hasAction(link: { name: string, hasClick: boolean, theme: string }): void {
    if (link.hasClick) {
      this.onAction.emit(link.name);
    }
  }

  containsApagar(link: { name: string }): boolean {
    return link.name.toLowerCase().includes('apagar');
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.isMenuOpen) {
      return;
    }

    const menuContainer = document.querySelector('.menu-container');
    if (!menuContainer || !menuContainer.contains(event.target as Node)) {
      this.isMenuOpen = false;
    }
  }
}
