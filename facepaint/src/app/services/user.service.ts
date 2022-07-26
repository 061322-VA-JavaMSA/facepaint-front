import { HttpClient } from '@angular/common/http';
import { TypeofExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get(`${environment.apiUrl}/users`, {
      headers: {

      }
    }).pipe(
      map(
        response => response as User[]
      )
    );
  }

  createUser(newUser: User): Observable<User> {
    return this.http.post(`${environment.apiUrl}/users`, newUser, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).pipe(
      map(
        response => response as User
      )
    );
  }
  
  deleteUser(reimUser: User){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        "id": reimUser.id
      },
    };

    return this.http.delete(`${environment.apiUrl}/users`, options)
   
  }

 
  };
  


  

