import { Injectable } from '@angular/core';
import { Login, Users } from '../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { application, response } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public url:String

  constructor(private _http:HttpClient) {
    this.url = global.url;
   
   }

   login(nickname:string,passuser:string){
    let params = JSON.stringify(nickname);
    let headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.post(this.url+'/usuario/login/',{nickname,passuser})
   }




}
