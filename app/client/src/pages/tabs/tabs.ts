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
  tab2Root = AboutPage;
  tab3Root = StatisticsPage;
  tab4Root = FriendPage;
  tab5Root = TripPage;

  constructor() {

  }
}
