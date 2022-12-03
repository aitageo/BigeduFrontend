import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    public title:string;
    public user:Users;

  constructor(private _UserService:UsersService) { 
       this.title = "Nuevo usuario";
       this.user = new Users('','','','','','','');
  }

  ngOnInit(): void {
  }

  OnSubmit(form:any){
    console.log(this.user);
    this._UserService.saveUser(this.user).subscribe(
      response =>{
        console.log(response);
      },
      err =>{
        console.error(<any>err);
        
      }
    )
    

  }

}


