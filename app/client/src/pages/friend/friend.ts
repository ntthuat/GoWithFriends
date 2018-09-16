import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {FriendDetailPage} from "./friendDetail/friendDetail";
import {FriendModel} from "../../providers/model/FriendModel";

@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html'
})
export class FriendPage {

  friendList: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public modalCtrl: ModalController, public friendModel: FriendModel) {
    this.getFriendList();
  }

  getFriendList() {
    this.restProvider.getLocalUsers()
      .then(data => {
        this.friendList = data;
        console.log(this.friendList);
      });
  }

  navigateFriendDetailPage(friendModel) {
    this.friendModel = friendModel;
    const myModal = this.modalCtrl.create(FriendDetailPage, {data: this.friendModel});
    myModal.onDidDismiss(data => {
    });
    myModal.present();
  }

  /*
   * Below is old code that using NavController push
   */
  /*navigateFriendDetailPage(friendModel) {
    this.navCtrl.push(FriendDetailPage);
  }*/

}
