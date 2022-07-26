import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUser!: User | null;
  //token: String; Do not have now, but will add later

  constructor(private http: HttpClient) { }

  login(username: string, password: string){

    let credentials = `username=${username}&password=${password}`;

    return this.http.post(`${environment.apiUrl}/auth`, credentials, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' //to json if necessary
      },
      observe: 'response'
    }).pipe(
      map(
        response => {
          this.loggedInUser = response.body as User;
          //this.token = response.headers.get('Authorization') || '';
        }
      )
    )
  }

  logout(){
    this.loggedInUser = null;
    //this.token = '';
  }
}
