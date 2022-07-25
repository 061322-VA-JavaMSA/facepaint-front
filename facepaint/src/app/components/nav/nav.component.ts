import { Component, Input, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {Role} from "../../models/role.enum";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() loggedInUser!: User; //will be to hold logged in user

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    console.log('logging out');
    //add logic to logout user
  }
}
