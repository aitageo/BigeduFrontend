import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../models/users';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    public title:string;
    public user:Users;
    public fecha : any;
    public fullDate : any;
    public locale : any;
    public date: any;

  constructor(private _UserService:UsersService,private router:Router) { 
       this.title = "Nuevo usuario";
       this.user = new Users('','','','','','','');
    
       moment.locale('es')
       const hoy = Date.now();
       this.date =  moment(hoy).format("dddd D MMMM YYYY")

     
  }

  ngOnInit(): void {
  }

  OnSubmit(form:any){
    console.log(this.user);
    console.log("Creado el: " + this.fecha);
    

    Swal.fire(
      'Muy Bien',
      'Registro Exitoso',
      'success'
    )
    this._UserService.saveUser(this.user).subscribe(
      response =>{
        console.log(response);
        form.reset();
      },
      err =>{
        console.error(<any>err);
        
      }
    )
    

  }//

  backLogin(){
   this.router.navigate(['login'])
  }

}


