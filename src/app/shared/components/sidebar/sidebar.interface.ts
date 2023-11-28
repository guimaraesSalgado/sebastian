export interface MenuItems {
  [key: string]: MenuItem[];
}

export interface MenuItem {
  label: string;
  icon: string;
  routerLink: string
  roles: string[];
}
