import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { HttpClient } from '@angular/common/http';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url: string;

  constructor(private _http:HttpClient) { 
    this.url = global.url;
  }
}
