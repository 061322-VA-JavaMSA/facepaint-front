import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';
import { userInt } from './userInt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facepaint';
  readonly ROOT_URL = 'http://localhost:8080';

  users!: Observable<any>;
  newUser!: Observable<any>;
  
  constructor(private http: HttpClient){}

  getUsers(){
   
    this.users = this.http.get(this.ROOT_URL + '/users' );

  }
  createUser(){
    const data: userInt = {
      
      username: "bruh",
      password: "pass"

    }
    this.newUser = this.http.post(this.ROOT_URL + '/users', data)
  }

    

   
    }



