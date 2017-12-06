import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecoverPage} from '../recover/recover'

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  constructor(public navCtrl: NavController) {

  }
 olvide(): void {
  this.navCtrl.push(RecoverPage);
}

}
