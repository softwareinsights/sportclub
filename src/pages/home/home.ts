import { WelcomePage } from './../welcome/welcome';
import { AuthService } from './login.service';
import { LoginInterface } from './login.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { WelcomePage } from '../welcome/welcome';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  email:string;
  password:string;

  constructor(public navCtrl: NavController, 
    protected service: AuthService ) {
  }

  onSubmit(): void {
    const values: LoginInterface = {
      'email': this.email,
      'password': this.password
    }
    this.service.login(values)
      .subscribe(
          (response: any) => {
            if(response.id !== undefined) {
              alert("¡Te has logeado correctamente!");
              this.navCtrl.push(WelcomePage);
            } else {
              alert("Tu contraseña o correo no contraseña");
            }
          });
  }

}
