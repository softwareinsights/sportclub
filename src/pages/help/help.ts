import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecoverPage} from '../recover/recover';
import { Http} from '@angular/http';

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  users: any[] = [];

  constructor(public navCtrl: NavController, private http: Http) {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=> {
      this.users = data.json();
      console.log(this.users);
    })

  }
 olvide(): void {
  this.navCtrl.push(RecoverPage);
}

}
