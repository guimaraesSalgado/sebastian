import { Component, EventEmitter, Input, Output, SkipSelf, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SeInputComponent } from '../input.component';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const CONTROL_CONTAINER_USE_FACTORY = (container: ControlContainer) => container;

@Component({
  selector: 'app-s-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true,
    },
  ],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: CONTROL_CONTAINER_USE_FACTORY,
      deps: [[new SkipSelf(), ControlContainer]],
    },
  ],
})
export class AutocompleteComponent extends SeInputComponent {
  @Input() set disableMessageError(disable: boolean) {
    this.messageError = disable;
  }

  @Input() minlength: number = 0;
  @Input() maxlength: number = 10;
  @Input() placeholder = '';
  @Input() prefix: string = '';
  @Input() suffix: string = '';
  @Input() autofocus = 'on';
  @Input() nativeType = 'text';
  @Input() index = null;

  @Input() characterPattern = '[A-Za-z]';
  @Input() slotChar = '_';
  @Input() autoClear = true;

  messageError: boolean = false;

  @Output() focus = new EventEmitter<any>();
  @Output() blur = new EventEmitter<any>();

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

  constructor(override controlContainer: ControlContainer) {
    super(controlContainer);
  }

  filterItems(event: any) {
    const query: string = event.target.value;
    if (query) {
      this.isLoading = true;
      this.simulateAsyncSearch(query).subscribe(filteredItems => {
        this.filteredItems = filteredItems;
        this.noResultsFound = this.filteredItems.length === 0;
        this.isLoading = false;
      });
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

  private simulateAsyncSearch(query: string): Observable<any[]> {
    return of(this.items.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )).pipe(delay(1000));
  }
}
