import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterService} from './register.service';
import { ActivityPage } from '../activity/activity';
import { RegisterInterface } from './register.interface';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  realm:string;
  username:string;
  email:string;
  password:string;
  repassword:string;

  constructor(public navCtrl: NavController, private service: RegisterService ) {  }

    volver(){
      this.navCtrl.pop();
    }

    onSubmit(): void {
      const values: RegisterInterface = {
        'realm': this.realm,
        'email': this.email,
        'password': this.password,
        'username':this.username
      }
      this.service.register(values)
        .subscribe(
            (response: any) => {
              if(response.id !== undefined) {
                alert("¡Te has registrado correctamente!");
                this.navCtrl.push(ActivityPage);
              }
            });
    }
}
