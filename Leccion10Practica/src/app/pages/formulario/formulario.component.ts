import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  public datos : any = {
    nombre : '',
    email : '',
    telefono : '',
    web : '',
    asunto : '',
  }

  public validate = false


  public IsEmpty(item: string){
     let input = <HTMLInputElement>document.getElementById(item);
     return input.value != "" ? false : true;
  }

  public validarDatos(){
    if (this.datos.nombre.length > 0 && this.datos.email.length > 0 && this.datos.telefono.length > 0 && this.datos.web.length > 0 && this.datos.asunto.length > 0) { this.validate = true}
  }
}

