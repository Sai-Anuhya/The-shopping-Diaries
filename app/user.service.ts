import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {  
 
  isUserLogged: boolean;

  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
   }
 
   setUserLoggedIn(): any { 
     this.isUserLogged = true;
   }
   setUserLoggedOut(): any {  
     this.isUserLogged = false;
   }
   getUserLogged() {
     return this.isUserLogged;
   }
   register(regForm: any): any {
    return this.httpClient.post('RESTAPI/webapi/myresource/register', regForm);
  }
  getUser(emailId: string): any {
    return this.httpClient.get('RESTAPI/webapi/myresource/GetUser/' + emailId);
  }
  getAllUsers(): any {
    return this.httpClient.get('RESTAPI/webapi/myresource/GetUsers');
  }
}
