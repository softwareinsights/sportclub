import { PlaceService } from './../pages/place/place.service';
import { PlacePage } from './../pages/place/place';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
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
import { HttpModule } from '@angular/http';
import { Configuration } from './app.constants';
import { AuthService } from '../pages/login/login.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { RegisterService } from '../pages/register/register.service';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    WelcomePage,
    ComplatePage,
    VerificationPage,
    ActivityPage,
    RecoverPage,
    recoverymailPage,
    StartPage,
    PlacePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    LocalStorageModule.withConfig({
        prefix: 'vieliquidaciones',
        storageType: 'localStorage',
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    WelcomePage,
    ComplatePage,
    VerificationPage,
    ActivityPage,
    RecoverPage,
    recoverymailPage,
    StartPage,
    PlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Configuration,
    RegisterService,
    PlaceService,
  ]
})
export class AppModule {}
