import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {


  name: string = "Unknown"

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(event: any) {
    console.log("form submitted");
  }

}
