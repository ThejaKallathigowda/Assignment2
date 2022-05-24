import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-stored-data',
  templateUrl: './stored-data.component.html',
  styleUrls: ['./stored-data.component.css']
})
export class StoredDataComponent implements OnInit {

  users: User[] = [];

  constructor(public userService: UserServiceService) { }

  ngOnInit(): void {
    const promise = this.userService.getUsers();
    promise.subscribe((response) => {
      console.log(response);
      this.users = response as User[]; 
    })
  }

}
