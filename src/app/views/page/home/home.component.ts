import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  condicao: boolean = true;

  scrollItens = [
    { title: 'Salada de Tomate e Mozzarella', description: 'Saladas', image: 'https://www.rbsdirect.com.br/imagesrc/35817237.jpg?w=700' },
    { title: 'Iscas de frango empanada', description: 'Aperitivos', image: 'https://claudia.abril.com.br/wp-content/uploads/2019/05/gatinho-destaque.jpg?quality=85&strip=info' },
    { title: 'Salada de Tomate e Mozzarella', description: 'Saladas', image: 'https://www.rbsdirect.com.br/imagesrc/35817237.jpg?w=700' },
    { title: 'Iscas de frango empanada', description: 'Aperitivos', image: 'https://claudia.abril.com.br/wp-content/uploads/2019/05/gatinho-destaque.jpg?quality=85&strip=info' },
  ];

  cards = [];

  teste(){
    this.condicao = !this.condicao
  }
}
