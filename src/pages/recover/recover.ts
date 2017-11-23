import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { recoverymailPage } from '../recoverymail/recoverymail';

@Component({
  selector: 'page-recover',
  templateUrl: 'recover.html'
})
export class RecoverPage {

  constructor(public navCtrl: NavController) { }

  enviar(){
    this.navCtrl.push(recoverymailPage);
  
   } 

}
