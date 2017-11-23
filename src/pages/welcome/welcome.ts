import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ComplatePage } from '../complate/complate';
import { StartPage } from '../start/start';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  completar(){
    this.navCtrl.push(ComplatePage);
  }
  
  siguiente(){
  /*  let confirm = this.alertCtrl.create({
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
  }
*/
this.navCtrl.push(StartPage);
 }
}