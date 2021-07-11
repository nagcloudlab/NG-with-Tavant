import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  user!: { name: String };
  isLoggedIn = false;

  data: string = ""

  constructor(
    private userService: UserService,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.user = this.userService.user; // sync
    this.dataService.getDetails() // async
      .then((data: any) => {
        this.data = data;
      })
  }

}
