import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor injection
  constructor(private http: HttpClient,) { }

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
  getUserById(activeUser: User): Observable<any> {
    return this.http.get<User[]>(`${environment.apiUrl}/users/${activeUser.id}`);
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
  updateUserShowcase(user: User):Observable<User>{
   
      return this.http.put<User>(`${environment.apiUrl}/users`,user)

  }
  update(user:User) {

    const headers = new HttpHeaders()
        .set("Content-Type", "application/json");
    
    this.http.put(`${environment.apiUrl}/users`,
        {
            "id": user.id,
            "username": user.username,
            "password": user.password,
            "role": user.role,
            "imageID": user.imageID
        },
        {headers})
        .subscribe(
            val => {
                console.log("PUT call successful value returned in body", 
                            val);
            },
            response => {
                console.log("PUT call in error", response);
            },
            () => {
                console.log("The PUT observable is now completed.");
            }
        );
    }
 
}
