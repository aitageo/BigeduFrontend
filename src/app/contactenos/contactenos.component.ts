import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  {  global } from '../services/global'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  public datos:FormGroup
  public url:String

  constructor(private _http:HttpClient) { 
    this.url = global.url;
    this.datos = new FormGroup({
      correo: new FormControl('',[Validators.required,Validators.email]),
      asunto: new FormControl('',Validators.required),
      mensaje: new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

  envioCorreo(){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    let params = {
      email: this.datos.value.correo,
      asunto: this.datos.value.asunto,
      mensaje: this.datos.value.mensaje,
    }
    this._http.post(this.url+'/correo',params,{headers:headers}).subscribe(
      response =>{
        console.log(response);
        let result = response;
        console.log(result);
        
        console.log("Correo enviado"); 
      },
      err =>{
        console.error(err);
        
      }
    )
  }

  mensaje(){
    Swal.fire(
      '!Muy Bien',
      'Mensaje Enviado',
      'success'
    )
   
  }

}
