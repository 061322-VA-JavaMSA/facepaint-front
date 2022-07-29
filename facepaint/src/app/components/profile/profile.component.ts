import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
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
  updateUserShowcase(imageURL: any){
    this.userServ.updateUserShowcase(imageURL).subscribe(data => this.updateUserShowcase = data.imageURL);
  }

}
