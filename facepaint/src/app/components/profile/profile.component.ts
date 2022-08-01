import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user: User
  id: number;



  constructor(private userServ: UserService, private authServ: AuthService) { }

  getUser: User; ngOnInit(){
    this.userServ.getUserById(this.authServ.loggedInUser)
    .subscribe(data => this.getUser = data);
  }
 
  updateMyArt(){
    this.userServ.getUserById(this.authServ.loggedInUser)
    .subscribe(data => this.getUser = data);
    console.log("button press")
  }
}
