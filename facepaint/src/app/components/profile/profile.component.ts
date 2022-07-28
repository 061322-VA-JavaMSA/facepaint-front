import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user: any
  id: number;

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
  }

  getUserById(id: number): void {
    this.userServ.getUserById(id).subscribe(
      user => this.user = user

    )
  }

}
