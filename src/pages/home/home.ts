import { AuthService } from './login.service';
import { LoginInterface } from './login.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  email:string;
  password:string;

  constructor(public navCtrl: NavController, 
    protected service: AuthService ) {
  }

  onSubmit(): void {
    const values: LoginInterface = {
      'email': this.email,
      'password': this.password
    }
    console.log(values);

    this.service.login(values)
      .subscribe(
          (response: any) => console.log(response) );
  }


}
