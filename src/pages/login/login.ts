import { RegisterPage } from './../register/register';
import { LocalStorageService } from 'angular-2-local-storage';
import { WelcomePage } from './../welcome/welcome';
import { AuthService } from './login.service';
import { LoginInterface } from './login.interface';
import { Component, OnInit } from '@angular/core';  //importamos init
import { NavController } from 'ionic-angular';
import { RecoverPage } from '../recover/recover';
import { StartPage } from '../start/start';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {  //Marcara error hasta no crear la funcion
  
  email:string;
  password:string;

  constructor(public navCtrl: NavController, 
    protected service: AuthService, private localStorageService: LocalStorageService ) { //Añadimos el constructor
  }
  ngOnInit(){
    if(this.localStorageService.get('isLoggedIn')) { //No necesitamos el true, A partir de la varible que creamos definira si pasa a start o se queda en loggin
      this.navCtrl.push(StartPage);

    }
  }

  registro(): void {
     this.navCtrl.push(RegisterPage);
  }

  olvide(): void {
    this.navCtrl.push(RecoverPage);
 }

  onSubmit(): void {
    const values: LoginInterface = {
      'email': this.email,
      'password': this.password
    }
    this.service.login(values)
      .subscribe(
          (response: any) => {
            console.log("aqui llega", response.id);
            if(response.id !== undefined) {
              alert("¡Te has logeado correctamente!");
              this.navCtrl.push(WelcomePage);
            } else {
              alert("Tu contraseña o correo no son correctos");
            }
          });
  }


}
