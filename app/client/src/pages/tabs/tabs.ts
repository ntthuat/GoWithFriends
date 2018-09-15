import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { FriendPage } from '../friend/friend';
import { HomePage } from '../home/home';
import { StatisticsPage } from '../statistics/statistics';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = StatisticsPage;
  tab5Root = FriendPage;

  constructor() {

  }
}
