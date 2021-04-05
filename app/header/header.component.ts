import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {Title} from "@angular/platform-browser";

declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private titleService:Title) { 
    this.titleService.setTitle("The Shopping Diaries");
  }

  emailId: string;
  password: string;
  res: boolean;
  user: any;
  users: any;
  name: string;

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: any) => {console.log(data); this.users = data; });
  }

  validateUser(loginForm: any) {    
    if (loginForm.value.emailId === 'admin' && loginForm.value.password === 'admin') {
      this.userService.setUserLoggedIn(); 
    }
  }

  userVerify() {
    return this.userService.getUserLogged();
  }

  showEditPopup(loginForm: any) { 
    for (let use of this.users) {
      if (this.emailId == use["emailId"] && this.password == use["password"]) {
        this.userService.setUserLoggedIn();
        this.user = use;
        // console.log("YES");
      }
    }
    console.log(this.user);
    this.res = this.userVerify();
    if (this.res) {
      jQuery('#validModal').modal('show');
      // console.log(this.res);
    }
    else {
      jQuery('#invalidModal').modal('show');
      // console.log(this.res);
    }
    
  }

  welcome() {
    
  }
  signout() {
    this.userService.setUserLoggedOut();
  }
}
