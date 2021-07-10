import { Injectable } from '@angular/core';

@Injectable({
  providedIn:"root"
})
export class ServiceOneService {

  constructor() { }

  getInfo() {
    console.log("feature1/service-one");
  }

}
