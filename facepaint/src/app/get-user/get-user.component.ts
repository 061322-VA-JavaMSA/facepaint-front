import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { user } from './mock-users'



@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  users!: Observable<any>;


  ngOnInit(): void {


  }



  constructor(private http: HttpClient) { 

  }


  // getUsers(){
  //   console.log(user);
  //   return user;
  // }
  getUsers(): Observable<User[]> {
    console.log(this.users)
    return this.http.get(`${environment.apiUrl}/users`, {
      headers: {
        
      }
    }).pipe(
      map(
        response => response as User[]
      )

    );
        
  }


}
  



