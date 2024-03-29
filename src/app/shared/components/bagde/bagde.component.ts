import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-s-bagde',
  templateUrl: './bagde.component.html',
  styleUrls: ['./bagde.component.scss']
})
export class BadgeComponent {
  @Input() set color(name: string | undefined) {
    if(name){
      this.background = name
      console.log(this.background)
    }
  };

  @Input() set text(content: string | undefined){
    if(content){
      this.textBadge = content;
    }
  }

  @Input() theme: 'default' | 'topic' | 'icon'  = 'topic';

  background: string = ''
  textBadge: string = ''
}
