import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tutorial } from '../model/tutorial.model';

import * as TutorialActions from '../actions/tutorial.actions'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {


  tutorials!: Observable<Tutorial[]>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.tutorials = this.store.select('tutorial')
  }

  deleteTutorial(i: number) {
    const action = TutorialActions.removeTutorial({ id: i })
    this.store.dispatch(action)
  }

}
