import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG-Final-app';

  color='violet'

  items: Array<string> = []

  addItem() {
    let item = "item-" + (this.items.length + 1)
    this.items.push(item);
  }

  deleteItem(i: number, event: Event) {
    event.preventDefault()
    let position = i + 0;
    this.items.splice(position, 1)
  }


}
