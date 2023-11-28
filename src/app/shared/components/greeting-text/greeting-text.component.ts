import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-s-greeting-text',
  templateUrl: './greeting-text.component.html',
  styleUrls: ['./greeting-text.component.scss']
})
export class GreetingTextComponent {
  @Input() nameUser: string = 'Nome do usuário'
  greeting: string = 'Bom dia';

  ngOnInit(): void {
    this.setGreeting();
  }

  private setGreeting(): void {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 12) {
      this.greeting = 'Bom dia ☀️';
    } else if (currentHour >= 12 && currentHour < 18) {
      this.greeting = 'Boa tarde ⛅';
    } else {
      this.greeting = 'Boa noite 🌙';
    }
  }
}
