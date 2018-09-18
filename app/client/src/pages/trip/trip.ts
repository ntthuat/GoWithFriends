import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {TripRestService} from "../../providers/rest/TripRestService";
import {TripDetailPage} from "./tripDetail/tripDetail";
import {ToastController} from 'ionic-angular';

@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html'
})
export class TripPage {

  tripList: any;

  constructor(public navCtrl: NavController, public tripService: TripRestService, public modalCtrl: ModalController, private toastCtrl: ToastController) {
    this.getTripList();
  }

  getTripList() {
    this.tripService.getLocalTrips()
      .then(data => {
        this.tripList = data;
      });
  }

  navigateTripDetailPage(trip) {
    // TODO: below is temporary check:
    if (trip["id"] == 2) {
      this.presentToast();
      return;
    }
    const myModal = this.modalCtrl.create(TripDetailPage, {data: trip});
    myModal.onDidDismiss(data => {
    });
    myModal.present();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'The trip you choose is only for test',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
