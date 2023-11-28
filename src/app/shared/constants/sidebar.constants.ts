import { MenuItems } from "../components/sidebar/sidebar.interface";

export const  MENU_ITEMS: MenuItems[] =  [{
  dashboard: [
    {
      label: 'Inicio',
      icon: 'heroHome',
      routerLink: '/page/home',
      roles: [],
    },
    {
      label: 'Listas',
      icon: 'HeroClipboardList',
      routerLink: '/list',
      roles: [],
    },
  ]
}]
