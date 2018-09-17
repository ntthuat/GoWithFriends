import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {FriendRestService} from '../../providers/rest/FriendRestService';
import {FriendDetailPage} from "./friendDetail/friendDetail";
import {FriendModel} from "../../providers/model/FriendModel";

@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html'
})
export class FriendPage {

  friendList: any;

  constructor(public navCtrl: NavController, public friendService: FriendRestService, public modalCtrl: ModalController, public friendModel: FriendModel) {
    this.getFriendList();
  }

  getFriendList() {
    this.friendService.getLocalUsers()
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
