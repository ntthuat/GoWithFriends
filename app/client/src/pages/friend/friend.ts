import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {FriendDetailPage} from "./friendDetail/friendDetail";

@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html'
})
export class FriendPage {

  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getUsers();
  }

  getUsers() {
    this.restProvider.getLocalUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  navigateFriendDetailPage(user) {
    let data = user;
    this.navCtrl.push(FriendDetailPage, user);
  }

}
