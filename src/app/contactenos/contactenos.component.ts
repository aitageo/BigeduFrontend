import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  mensaje(){
    Swal.fire(
      '!Muy Bien',
      'Mensaje Enviado',
      'success'
    )
   
  }

}
