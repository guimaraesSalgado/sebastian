import { Component } from '@angular/core';

import { MENU_ITEMS } from 'src/app/shared/constants/sidebar.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems = MENU_ITEMS;
}
