import { RegisterPage } from './../register/register';
import { WelcomePage } from './../welcome/welcome';
import { AuthService } from './login.service';
import { LoginInterface } from './login.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecoverPage } from '../recover/recover';
import { LocalStorageService } from 'angular-2-local-storage';
import { StartPage } from '../start/start';


@Component({
 selector: 'page-login',
 templateUrl: 'login.html'
})
export class LoginPage {
 
 email:string;
 password:string;

 constructor(public navCtrl: NavController,
   protected service: AuthService, private localStorageService: LocalStorageService) {
     if(this.localStorageService.get("isLoggetIn")){
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
           console.log("response", response);

           if(response.error !== undefined) {
             alert("Error al logearte!");
           } else if(response.id !== undefined) {
             alert("¡Te has logeado correctamente!");
             this.navCtrl.push(WelcomePage);
           }
         });
 }


}