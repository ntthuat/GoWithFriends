import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {TripRestService} from "../../providers/rest/TripRestService";
import {TripDetailPage} from "./tripDetail/tripDetail";

@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html'
})
export class TripPage {

  tripList: any;

  constructor(public navCtrl: NavController, public tripService: TripRestService, public modalCtrl: ModalController) {
    this.getTripList();
  }

  getTripList() {
    this.tripService.getLocalTrips()
      .then(data => {
        this.tripList = data;
      });
  }

  navigateTripDetailPage(trip) {
    const myModal = this.modalCtrl.create(TripDetailPage, {data: trip});
    myModal.onDidDismiss(data => {
    });
    myModal.present();
  }
}
