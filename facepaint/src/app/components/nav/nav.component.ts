import { Component, Input, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {Role} from "../../models/role.enum";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() loggedInUser!: User; //will be to hold logged in user

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    console.log('logging out');
    this.authServ.logout();
    this.router.navigate(['']) //sends user back to homepage with login
  }
}
