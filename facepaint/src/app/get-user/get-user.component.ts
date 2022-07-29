import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { User } from '../models/user';



@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  users!: any;
  constructor(private us: UserService) { 

  }


   getUsers: Observable<User[]>; ngOnInit(){
    this.users = this.us.getUsers();
    console.log(this.users);
    return this.users;
    


  }
}



  


  // getUsers(){
  //   console.log(user);
  //   return user;
  // }
  // getUsers(): Observable<User[]>{
  //   this.users = this.us.getUsers();
  //   console.log(this.users);
  //   return this.users;
  // }



  



