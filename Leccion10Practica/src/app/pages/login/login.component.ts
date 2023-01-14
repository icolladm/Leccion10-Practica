import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public datos: any = {
    email: '',
    password: ''
  }

  isValid = false

  public validate(){
    let regexp = new RegExp(/\S+@\S+\.\S+/)
    if (this.datos.password.length > 8 && regexp.test(this.datos.email) ) { this.isValid = true}
    if (!this.isValid) {alert('Uno de los datos introducidos no tiene el formato correcto')}
  }
}
