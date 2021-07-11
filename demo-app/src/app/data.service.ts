import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  getDetails() {
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("DATA")
      }, 3000);
    })
    return resultPromise;
  }

  constructor() { }
}
