import { Component } from '@angular/core';
@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent  {

  items = [
    { id: 1, title: 'Menu de Café da Manhã', description: 'Café da manhã dessa semana.', active: false , icon: 'heroCake', theme: 'revenue'},
    { id: 2, title: 'Compras do mês', description: null, active: false , icon: 'heroInbox', theme: 'info'},
    { id: 3, title: 'Almoço aniversário', description: 'Itens para o aniversário da Betania', active: false, icon: 'heroCake', theme: 'shop'},
  ]
}
