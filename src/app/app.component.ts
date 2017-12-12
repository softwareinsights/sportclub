import { PlacePage } from './../pages/place/place';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage} from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';
import { ComplatePage } from '../pages/complate/complate';
import { VerificationPage } from '../pages/verification/verification';
import { ActivityPage } from '../pages/activity/activity';
import { RecoverPage } from '../pages/recover/recover';
import { recoverymailPage } from '../pages/recoverymail/recoverymail';
import { StartPage } from '../pages/start/start';
import {AuthService} from '../pages/login/login.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;



  pages: Array<{title: string, component: any}>;

  constructor(public auth:AuthService,
    public menu: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // set our app's pages
    this.pages = [
      { title: 'Home', component: StartPage },
      { title: 'Agrega un Lugar', component: PlacePage }
    ];

   
  }

  closeMenu() {
    // close the menu when clicking a link from the menu
    this.auth.logout();
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

