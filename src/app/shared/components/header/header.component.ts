import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

import { MENU_ITEMS } from 'src/app/shared/constants/sidebar.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('menuList') menuList!: ElementRef;

  @Input() theme: 'home' | 'internal' = 'home';

  menuItems = MENU_ITEMS;

  menuLinks = [
    { name: 'Editar lista', hasClick: true, theme: '' },
    { name: 'Apagar lista', hasClick: true, theme: 'secondary' }
  ];


  constructor(private location: Location){}

  goBack(): void {
    this.location.back();
  }

  handleMenuAction(linkName: string): void {
    // Lidar com a ação do menu conforme necessário
    console.log(`Ação executada para o link: ${linkName}`);
  }

}
