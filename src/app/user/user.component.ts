import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserServiceService) { }

  user: User = new User()
  
  registerpage:boolean=true;
  thankyoupage:boolean=false;
  vals(){
    this.registerpage=!this.registerpage;
    this.thankyoupage=!this.thankyoupage;
  }

  save(){
    //console.log(this.user);
    const observable = this.userService.registerUser(this.user);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        this.vals();
      },
      function (error) {
        console.log(error);
        alert('something went wrong try again');
      }
    );
  }
  ngOnInit(): void {
    
  }


}
