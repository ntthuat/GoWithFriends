import {Component} from '@angular/core';
import {NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import {TripRestService} from "../../../providers/rest/TripRestService";

@Component({
  selector: 'page-tripDetail',
  templateUrl: 'tripDetail.html'
})
export class TripDetailPage {

  trip: any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private modalCtrl: ModalController, private viewCtrl: ViewController, public tripService: TripRestService) {
    this.getTripDetail();
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  /*
   * TODO: Below is temporary get local data
   */
  getTripDetail() {
    this.tripService.getLocalTripDetail()
      .then(data => {
        this.trip = data;
        console.log(this.trip);
      });
  }

}
