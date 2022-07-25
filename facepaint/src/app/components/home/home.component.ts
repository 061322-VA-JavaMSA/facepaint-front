import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
        this.router.navigate(['']);
      },
      () => {
        this.errorMessage = 'Unable to login.';
      }
    );
  }
}
