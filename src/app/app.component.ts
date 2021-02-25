import { ChangeDetectionStrategy, Component } from '@angular/core';
import '@cds/core/button/register.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  nodes = [];
  show = false;

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.nodes.push({ id: i, name: Math.random() });
    }
  }

  track(_index, node){
    return node.id; 
  }
}
