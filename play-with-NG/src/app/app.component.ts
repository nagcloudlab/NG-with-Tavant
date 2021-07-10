import { Component } from '@angular/core';
import { ServiceOneService } from './feature1/service-one.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'play-with-NG';

  message = "greetings"

  constructor(private serviceOne: ServiceOneService) { }

  ngOnInit() {
    this.serviceOne.getInfo();
  }


}
