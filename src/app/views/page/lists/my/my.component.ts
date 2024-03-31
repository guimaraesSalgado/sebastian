import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements AfterViewInit {
  @ViewChild('container') containerRef!: ElementRef | undefined;
  items: any[] = [
    { text: 'Item 1', showMenu: false },
    { text: 'Item 2', showMenu: false },
    { text: 'Item 3', showMenu: false }
  ];

  constructor() { }

  ngAfterViewInit(): void {
    if (!this.containerRef) {
      console.error('Elemento não encontrado.');
      return;
    }

    const mc = new Hammer.Manager(this.containerRef.nativeElement);
    const swipe = new Hammer.Swipe({ direction: Hammer.DIRECTION_LEFT });
    mc.add(swipe);

    mc.on('swipe', (event) => {
      this.items.forEach(item => item.showMenu = false);
      const target = event.target as HTMLElement;
      const index = parseInt(target.getAttribute('data-index') || '0', 10);
      this.items[index].showMenu = true;
    });
  }

  closeMenu(item: any) {
    item.showMenu = false;
  }
}
