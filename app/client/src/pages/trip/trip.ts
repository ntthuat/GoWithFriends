import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {TripRestService} from "../../providers/rest/TripRestService";

@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html'
})
export class TripPage {

  tripList: any;

  constructor(public navCtrl: NavController, public tripService: TripRestService, public modalCtrl: ModalController) {
    this.getLocalList();
  }

  getLocalList() {
    this.tripService.getLocalTrips()
      .then(data => {
        this.tripList = data;
      });
  }

}
