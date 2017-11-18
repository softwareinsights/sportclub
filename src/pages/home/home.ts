import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { WelcomePage } from '../welcome/welcome';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }


  goToRegister(){
    
    this.navCtrl.push(RegisterPage);


  }

  goToWelcome(){

    this.navCtrl.push(WelcomePage);

  }
}
