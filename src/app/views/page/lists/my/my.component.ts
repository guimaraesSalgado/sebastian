import { Component } from '@angular/core';
@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent  {
  title = "for-test";

  list = [
    {
      id: 1,
      title: "Realizar la tarea asignada!",
      subTitle: "9:00pm",
      mark: false,
    },
    {
      id: 2,
      title: "Visitar al perro en casa de tu amiga",
      subTitle: "9:00pm",
      mark: false,
    },
    {
      id: 3,
      title: "Llamar al doctor",
      subTitle: "9:00pm",
      mark: false,
    },
    {
      id: 4,
      title: "Buscar el auto en el taller",
      subTitle: "9:00pm",
      mark: false,
    }
  ];

  action = (a: any) => {
    console.log(a);
  };

  swipeCallback = (a: any) => {
    console.log('Callback Swipe', a);
  }
}
