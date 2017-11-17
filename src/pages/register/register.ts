import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {

  }
siguiente(){
  this.navCtrl.push(ActivityPage);
}

volver(){
  this.navCtrl.pop();
}
}
