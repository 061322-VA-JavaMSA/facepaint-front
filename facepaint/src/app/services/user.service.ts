import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';


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

}

