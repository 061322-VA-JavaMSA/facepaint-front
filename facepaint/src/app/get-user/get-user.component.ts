import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { userInt } from './userInt';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  

  ngOnInit(): void {
  }

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
