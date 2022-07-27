import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  profiles:any;

  constructor(private userServ: UserService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  viewProfile(){
    this.profiles = this.http.get(`${environment.apiUrl}/users/1`)

  }

}
