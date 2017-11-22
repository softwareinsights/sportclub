import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { WelcomePage } from '../pages/welcome/welcome';
import { ComplatePage } from '../pages/complate/complate';
import { VerificationPage } from '../pages/verification/verification';
import { ActivityPage } from '../pages/activity/activity';
import { RecoverPage } from '../pages/recover/recover';
import { recoverymailPage } from '../pages/recoverymail/recoverymail';
import { StartPage } from '../pages/start/start';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    WelcomePage,
    ComplatePage,
    VerificationPage,
    ActivityPage,
    RecoverPage,
    recoverymailPage,
    StartPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    WelcomePage,
    ComplatePage,
    VerificationPage,
    ActivityPage,
    RecoverPage,
    recoverymailPage,
    StartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
