import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FriendRestService } from '../../providers/rest/FriendRestService';
import { FriendPage} from "../friend/friend";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;

  constructor(public navCtrl: NavController, public restProvider: FriendRestService) {
    this.getUsers();
  }

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
