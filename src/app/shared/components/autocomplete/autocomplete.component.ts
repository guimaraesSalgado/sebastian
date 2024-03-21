import { Component } from '@angular/core';

@Component({
  selector: 'app-s-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {

  items: any[] = [
    {
      id: 1,
      name: 'Fernanda',
      cargo: 'Desenvolvedora',
      email: 'fernanda@app.com',
    },
    {
      id: 2,
      name: 'Rayane',
      cargo: 'Gerente de Produtos',
      email: 'rayane@app.com',
    }
  ];
  filteredItems: any[] = [];
  noResultsFound: boolean = false;
  isLoading: boolean = false;

  filterItems(event: any) {
    const query: string = event.target.value;
    if (query) {
      this.isLoading = true;
      setTimeout(() => { // Simulação de busca assíncrona
        this.filteredItems = this.items.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        this.noResultsFound = this.filteredItems.length === 0;
        this.isLoading = false;
      }, 1000); // Tempo de simulação de busca
    } else {
      this.filteredItems = [];
      this.noResultsFound = false;
      this.isLoading = false;
    }
  }

  selectItem(item: any) {
    console.log('Item selecionado:', item);
    this.filteredItems = [];
    this.noResultsFound = false;
    this.isLoading = false;
  }
}
