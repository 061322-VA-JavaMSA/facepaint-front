import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
        this.router.navigate(['']); //sent to profile for now, can change later
      },
      () => {
        this.errorMessage = 'Unable to login.';
      }
    );
  }
}
