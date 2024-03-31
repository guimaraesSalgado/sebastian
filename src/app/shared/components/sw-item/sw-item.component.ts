import { Component } from '@angular/core';

@Component({
  selector: 'app-s-sw-item',
  templateUrl: './sw-item.component.html',
  styleUrls: ['./sw-item.component.scss']
})
export class SWItemComponent {
  list = [
    {
      id: 1,
      title: 'Realizar la tarea asignada!',
      subTitle: '9:00pm'
    },
    {
      id: 2,
      title: 'Visitar al perro en casa de tu amiga',
      subTitle: '9:00pm'
    },
    {
      id: 3,
      title: 'Llamar al doctor',
      subTitle: '9:00pm'
    },
    {
      id: 4,
      title: 'Buscar el auto en el taller',
      subTitle: '9:00pm'
    },
        {
      id: 4,
      title: 'Buscar el auto en el taller',
      subTitle: '9:00pm'
    },
        {
      id: 4,
      title: 'Buscar el auto en el taller',
      subTitle: '9:00pm'
    },
        {
      id: 4,
      title: 'Buscar el auto en el taller',
      subTitle: '9:00pm'
    },
        {
      id: 4,
      title: 'Buscar el auto en el taller',
      subTitle: '9:00pm'
    },
        {
      id: 4,
      title: 'Buscar el auto en el taller',
      subTitle: '9:00pm'
    },
        {
      id: 4,
      title: 'Buscar el auto en el taller',
      subTitle: '9:00pm'
    },
        {
      id: 4,
      title: 'Buscar el auto en el taller',
      subTitle: '9:00pm'
    }
  ];


  action = (a: any) => {
    console.log(a);

  };

  clickOnItem = (a: any) => {
    console.log('Click on item');
  }

  swipeCallback = (a: any) => {
    console.log('Callback Swipe', a);
  }
}

