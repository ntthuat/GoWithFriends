import {Component} from '@angular/core';
import {NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import {FriendModel} from "../../../providers/model/FriendModel";

@Component({
  selector: 'page-friendDetail',
  templateUrl: 'friendDetail.html'
})
export class FriendDetailPage {

  friendModel: FriendModel;

  constructor(private navCtrl: NavController, private navParams: NavParams, private modalCtrl: ModalController, private viewCtrl: ViewController) {
    this.friendModel = this.navParams.get('data');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  /*
   * Below is old solution that using NavParams get
   */
  /*getUser() {
    this.friendModel.name = this.navParams.get("name");
    this.friendModel.phone = this.navParams.get("phone");
    this.friendModel.email = this.navParams.get("email");
    this.user = this.friendModel;
  }*/

}
