import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { userInt } from './get-user/userInt';
import {User} from "./models/user";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facepaint';

  loggedInUser!: User |  null;

  constructor(private authServ: AuthService) {
  }

  getLoggedInUser(){
    this.loggedInUser = this.authServ.loggedInUser;
    console.log(this.authServ.loggedInUser);
  }
}



