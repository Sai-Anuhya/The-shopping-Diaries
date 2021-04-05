import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  isUserLogged: boolean;

  constructor(private httpClient: HttpClient) {  }


  getMobiles(): any {
     return this.httpClient.get('RESTAPI/webapi/myresource/GetMobiles/');
   }
   
}
