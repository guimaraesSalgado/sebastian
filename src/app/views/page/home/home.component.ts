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
    { title: 'Ovos de páscoa', description: '10 ingredientes', image: 'https://portaledicase.com/wp-content/uploads/2022/03/ovo_pascoa.jpg', theme: 'sobremesa' },
    { title: 'Bolinho de chuva', description: '5 ingredientes', image: 'https://www.receiteria.com.br/wp-content/uploads/bolinho-de-chuva-simples-e-sequinho.jpeg', theme: 'café da manha' },
    { title: 'Caldo', description: '5 ingredientes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb37Dg60hPCLCfNsIdarS-361fj3QmHIWO7MriPr3p1g&s', theme: 'janta' },
    { title: 'Iscas de frango', description: '7 ingredientes', image: 'https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-iscas-frango-empanadas-cerveja.jpg', theme: 'almoço' },
  ];

  cards = [
    {
      id: 1,
      icon: '',
      title: 'Supermercado',
      description: 'Compras do mês de abril',
      theme: 'shop'
    },
    {
      id: 2,
      icon: '',
      title: 'Bolo de aniversário',
      description: 'Itens que preciso comprar para o bolo do Rodolfinho',
      theme: 'revenue'
    },
    {
      id: 3,
      icon: '',
      title: 'Torta de frango',
      description: null,
      theme: 'info'
    }
  ];

  constructor(
    private router: Router,
  ) {
    this.showList = this.validateArrayLength(this.scrollItens, this.cards);
  }

  navigateToNew(): void {
    this.router.navigate(['/page/new'])
  }

  validateArrayLength(...arrays: any[][]): boolean {
    return arrays.some(array => array.length > 0);
  }
}
