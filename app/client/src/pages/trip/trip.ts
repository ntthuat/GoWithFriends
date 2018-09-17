import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/FriendRest';

@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html'
})
export class TripPage {

  friendList: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, public modalCtrl: ModalController) {
  }

}
