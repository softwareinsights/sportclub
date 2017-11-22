import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WelcomePage} from '../welcome/welcome';
import {RegisterPage} from '../register/register';
import { AlertController } from 'ionic-angular';
import { StartPage } from '../start/start';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {   }

    

    accesa(){
      /*
      let confirm = this.alertCtrl.create({
        title: 'Lo sentimos :(',
        message: 'Aun no tenemos pantalla de inicio',
        buttons: [
          {
        
            text: 'De acuerdo',
            handler: () => {
              console.log('Agree clicked');
            }
          }
        ]
      });
      confirm.present();
      */
   // this.navCtrl.push(StartPage);
    }
 
 regi(){
  this.navCtrl.push(RegisterPage);

 } 
}
