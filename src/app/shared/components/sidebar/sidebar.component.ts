import { Component, Inject, Input, OnInit } from '@angular/core';
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
  direction: 'left' | 'right' = 'left'; // Nova propriedade para acompanhar a direção da transição

  constructor(
    @Inject('APP_VERSION') private appVersion: string,
    private router: Router) {}

    ngOnInit(): void {
      this.version = this.appVersion;
    }

    isActive(route: string): boolean {
      if (this.router.url === route) {
        this.direction = 'left'; // Define a direção da transição como 'left' se a rota for a mesma
        return true;
      } else {
        this.direction = 'right'; // Define a direção da transição como 'right' se a rota for diferente
        return false;
      }
    }
  }
