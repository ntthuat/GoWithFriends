import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {FriendPage} from '../friend/friend';
import {HomePage} from '../home/home';
import {StatisticsPage} from '../statistics/statistics';
import {TripPage} from "../trip/trip";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TripPage;
  tab3Root = FriendPage;
  tab4Root = StatisticsPage;
  tab5Root = AboutPage;

  constructor() {

  }
}
