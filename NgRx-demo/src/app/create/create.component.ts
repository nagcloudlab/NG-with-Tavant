import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TutorialActions from '../actions/tutorial.actions'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  addTutorial(name: string, url: string) {
    const action = TutorialActions.addTutorial({ name, url });
    this.store.dispatch(action)
  }

}
