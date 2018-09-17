import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {StatisticsPage} from '../pages/statistics/statistics';
import {FriendPage} from '../pages/friend/friend';
import {FriendDetailPage} from '../pages/friend/friendDetail/friendDetail';
import {HomePage} from '../pages/home/home';
import {TripPage} from "../pages/trip/trip";
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {FriendModel} from "../providers/model/FriendModel";
import {HttpClientModule} from '@angular/common/http';

import {FriendRestService} from '../providers/rest/FriendRestService';
import {TripRestService} from "../providers/rest/TripRestService";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    StatisticsPage,
    FriendPage,
    FriendDetailPage,
    TripPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    StatisticsPage,
    FriendPage,
    FriendDetailPage,
    TripPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FriendRestService,
    TripRestService,
    FriendModel
  ]
})
export class AppModule {
}
