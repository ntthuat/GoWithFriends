import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RestProvider} from '../../../providers/rest/rest';

@Component({
  selector: 'page-friendDetail',
  templateUrl: 'friendDetail.html'
})
export class FriendDetailPage {

  users: any;
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getUsers();
    this.getUser();
  }

  getUsers() {
    this.restProvider.getLocalUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  getUser() {
    this.name = this.navParams.get('name');
  }

}
