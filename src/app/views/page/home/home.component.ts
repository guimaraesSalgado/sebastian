import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showList: boolean = false;

  scrollItens = [
    { title: 'Salada de Tomate e Mozzarella', description: 'Saladas', image: 'https://www.rbsdirect.com.br/imagesrc/35817237.jpg?w=700' },
    { title: 'Iscas de frango empanada', description: 'Aperitivos', image: 'https://claudia.abril.com.br/wp-content/uploads/2019/05/gatinho-destaque.jpg?quality=85&strip=info' },
    { title: 'Salada de Tomate e Mozzarella', description: 'Saladas', image: 'https://www.rbsdirect.com.br/imagesrc/35817237.jpg?w=700' },
    { title: 'Iscas de frango empanada', description: 'Aperitivos', image: 'https://claudia.abril.com.br/wp-content/uploads/2019/05/gatinho-destaque.jpg?quality=85&strip=info' },
  ];

  cards = [];

  constructor(
    private router: Router,
  ) {
    this.showList = this.validateArrayLength(this.scrollItens, this.cards);
  }

  navigateToList(): void {
    this.router.navigate(['/page/list'])
  }

  validateArrayLength(...arrays: any[][]): boolean {
    return arrays.some(array => array.length > 0);
  }
}
