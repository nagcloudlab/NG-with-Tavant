import { Component, OnInit, ContentChild, ViewChild, ContentChildren, ViewChildren, ElementRef, Renderer2, QueryList, NgModule } from '@angular/core';

import { TextComponent } from '../text/text.component'
import { CounterComponent } from '../counter/counter.component'
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // @Input() header: string = "";
  // @Input() body: string = "";
  // @Input() footer: string = "";

  // @Input() header: string = "";
  // @Input() body: string = "";
  // @Input() footer: string = "";

  @ContentChild("header")
  cardContentHeader!: ElementRef;

  @ContentChildren(TextComponent)
  textComps!: QueryList<TextComponent>

  // @ViewChild(CounterComponent, {})
  // counterChild!: CounterComponent;

  name = ""

  @ViewChild("para")
  para!: ElementRef

  @ViewChild("inp", { read: NgModel })
  inp!: NgModel


  @ViewChild("child", { static: false })
  counterChild!: CounterComponent; // undefined



  showCounter = false;

  toggleCounter() {
    this.showCounter = !this.showCounter;
  }


  constructor(private renderer: Renderer2) {
  }
  ngOnInit(): void {
  }


  ngAfterContentInit() {
    this.renderer.setStyle(this.cardContentHeader.nativeElement, "font-size", "20px");
    let i = 0;
    this.textComps.forEach(textComp => {
      i++;
      textComp.text = "text-" + i
    })
  }

  ngAfterViewInit() {
    // this.counterChild.count = 100;
  }

  inc() {
    this.counterChild.increment();
  }
  dec() {
    this.counterChild.decrement();
  }


}
