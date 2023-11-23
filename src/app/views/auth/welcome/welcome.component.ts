import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ['./welcome.component.scss']

})
export class WelcomeComponent implements OnInit {
  @Input() items: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'joana'
    },
    {
      id: 2,
      name: 'joana ¨6'
    },
    {
      id: 3,
      name: 'joana ('
    }
  ];

  rotation = 0;

  ngOnInit() {
    this.setupScrollListener();
  }

  private setupScrollListener() {
    const container = document.querySelector('.carousel-container');
    if (container) {
      container.addEventListener('scroll', () => {
        this.calculateRotation(container);
      });
    }
  }

  private calculateRotation(container: any) {
    const scrollPercentage = (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
    this.rotation = (scrollPercentage * 3.6); // 3.6 é usado para converter de porcentagem para graus (360 / 100)
  }
}
