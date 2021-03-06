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
import {TripDetailPage} from "../pages/trip/tripDetail/tripDetail";
import {PaymentListPage} from "../pages/trip/tripDetail/paymentList/paymentList";
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {FriendModel} from "../providers/model/FriendModel";
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {FriendRestService} from '../providers/rest/FriendRestService';
import {TripRestService} from "../providers/rest/TripRestService";

import {PaymentPage} from "../pages/trip/tripDetail/payment/payment";
import {DatabaseProvider} from "../providers/database/DatabaseProvider";
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    StatisticsPage,
    FriendPage,
    FriendDetailPage,
    TripPage,
    TripDetailPage,
    TabsPage,
    PaymentPage,
    PaymentListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    TripDetailPage,
    TabsPage,
    PaymentPage,
    PaymentListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FriendRestService,
    TripRestService,
    FriendModel,
    DatabaseProvider,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
