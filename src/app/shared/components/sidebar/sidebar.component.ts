import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItems, MenuItem } from './sidebar.interface';
import { Profile } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-s-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuItems: MenuItems[] = [];

  @Input() profile: Profile = {
    id: 1,
    name: 'User Name',
    surname: 'Surname',
    email: 'email.user@gmail.com',
    photo: null
  }

  sidebarOpen = false;
  version: string = '';
  selectedMenu: string | undefined;

  constructor(
    @Inject('APP_VERSION') private appVersion: string,
    private router: Router) {}

  ngOnInit(): void {
    this.version = this.appVersion;
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  isSelectedMenu(routerLink: string): boolean {
    const currentRoute = this.router.url.split('#')[0];
    return currentRoute.includes(routerLink);
  }

  selectMenu(menuKey: string): void {
    this.selectedMenu = menuKey;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!(event.target as HTMLElement).closest('.menu')) {
      this.closeSidebar();
    }
  }

  @HostListener('document:swipeleft', ['$event'])
  onSwipeLeft(event: Event): void {
    this.closeSidebar();
  }

  getObjectKeys(menu: MenuItems): string[] {
    return Object.keys(menu);
  }

  getMenuSection(menu: MenuItems, section: string): MenuItem[] {
    return menu[section] || [];
  }
}
