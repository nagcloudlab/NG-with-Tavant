import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {


  @Input()
  message = ""

  time: any;
  
  intervalId: any;

  constructor() {
    console.log("GreetingComponent :: constructor");
  }

  // to do any side effects on new input properties
  ngOnChanges(changes: SimpleChange) {
    console.log("GreetingComponent :: ngOnChanges");
    // console.log(changes);
  }

  // to do one time intialization. like n/w calls , subscribtion with reactive-streams
  ngOnInit() {
    console.log("GreetingComponent :: ngOnInit");
    this.intervalId = setInterval(() => {
      console.log("sti");
      this.time = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })
    }, 1000)
  }

  // // to do custom change detection logic 
  // ngDoCheck() {
  //   console.log("GreetingComponent :: ngDoCheck");
  // }

  // to access content child(s)
  ngAfterContentInit() {
    console.log("GreetingComponent :: ngAfterContentInit");
  }

  // ngAfterContentChecked() {
  //   console.log("GreetingComponent :: ngAfterContentChecked");
  // }

  // to access view child(s)
  ngAfterViewInit() {
    console.log("GreetingComponent :: ngAfterViewInit");
  }

  // ngAfterViewChecked() {
  //   console.log("GreetingComponent :: ngAfterViewChecked");
  // }

  ngOnDestroy() {
    clearInterval(this.intervalId)
    console.log("GreetingComponent :: ngOnDestroy");
  }


}
