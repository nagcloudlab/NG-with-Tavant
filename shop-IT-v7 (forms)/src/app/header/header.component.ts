import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  
  <hr />
  <div>{{title}}</div>
  <hr />

  `
})
export class HeaderComponent {

  @Input('value')
  title: string = "Nil"

}
