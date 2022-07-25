import { Component, OnInit, Input } from '@angular/core';
import { USER } from './mock-users';
import { User } from './user';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  @Input() User?: User;
  
  users = USER;

  selectedUser?: User;

  constructor() { }

  ngOnInit(): void {
  }

}
