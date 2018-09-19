import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {FriendRestService} from '../../providers/rest/FriendRestService';
import {FriendDetailPage} from "./friendDetail/friendDetail";
import {FriendModel} from "../../providers/model/FriendModel";
import {DatabaseProvider} from "../../providers/database/DatabaseProvider";

@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html'
})
export class FriendPage {

  friendList: any;

  constructor(public navCtrl: NavController, public friendService: FriendRestService, public modalCtrl: ModalController, public friendModel: FriendModel, public database: DatabaseProvider) {
    this.getFriendListFromSQLite();
  }

  getFriendList() {
    this.friendService.getLocalUsers()
      .then(data => {
        this.friendList = data;
        console.log(this.friendList);
      });
  }

  getFriendListFromSQLite(){
    this.database.getUsers().then((data: any) => {
      this.friendList = data;
    }, (error) => {
      console.log(error);
    })
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
