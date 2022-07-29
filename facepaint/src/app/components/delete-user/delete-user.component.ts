import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/models/role.enum';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  
  remUser!: User;
  errorMessage!: string;
  id!: number

  constructor(private userServ: UserService, private router: Router) { }

  ngOnInit(): void {
    this.remUser = new User(0, '', '', Role.BASIC_USER,'');
    this.id = 0
  }

  delete(remUser: User){
    this.errorMessage = 'begin';

    this.userServ.deleteUser(remUser).subscribe(
      () => {
        this.router.navigate(['getusers']);
        window.location.reload();
      },
      () => {
        this.errorMessage = 'User does not exist'
      }
    );
    
  }

}
