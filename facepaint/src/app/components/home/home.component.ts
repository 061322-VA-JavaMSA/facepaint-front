import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()loggedInUser!: User;

  usernameInput!: string;
  passwordInput!: string;
  errorMessage!: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usernameInput = '';
    this.passwordInput = '';
    this.errorMessage = '';
  }

  login(){
    this.authService.login(this.usernameInput, this.passwordInput).subscribe(
      () => {
        this.router.navigate(['profile']); //sent to profile for now, can change later
      },
      () => {
        this.errorMessage = 'Unable to login.';
      }
    );
  }
}
