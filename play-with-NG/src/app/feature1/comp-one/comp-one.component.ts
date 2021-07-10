import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from '../service-one.service';

@Component({
  selector: 'feature1-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css'],
  //providers: [ServiceOneService]
})
export class CompOneComponent implements OnInit {

  constructor(private serviceOne: ServiceOneService) { }

  ngOnInit() {
    this.serviceOne.getInfo();
  }

}
