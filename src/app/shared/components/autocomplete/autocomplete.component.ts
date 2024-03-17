import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-s-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  filteredItems: string[] = [];

  filterItems(event: any) {
    const query: string = event.target.value;
    if (query) {
      this.filteredItems = this.items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredItems = [];
    }
  }


  selectItem(item: string) {
    console.log('Item selecionado:', item);
  }
}
