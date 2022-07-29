import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/models/role.enum';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser!: User;
  passwordVerification!: String;
  errorMessage!: String;
  successMessage!: string

  constructor(private userServ: UserService, private router:Router) { }

  ngOnInit(): void {
    this.newUser = new User(0, null, null, Role.BASIC_USER,'');
  }

  register(){
    this.errorMessage = '';
    this.successMessage = '';

    if(this.newUser.username != null && this.newUser.password != null){
      this.userServ.createUser(this.newUser).subscribe(
        () => {
          this.successMessage ='User created! Redirecting...'
          setTimeout(() => {
          this.router.navigate(['login'])}, 3000)
        },
        () => {
          this.errorMessage = 'Username already in use, please try again'
        }
      );}else{
      this.errorMessage = 'Fields cannot be null'
      }
    }
  }

