import {Component} from '@angular/core';
import {NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import {TripRestService} from "../../../providers/rest/TripRestService";
import {PaymentPage} from "./payment/payment";
import {PaymentListPage} from "./paymentList/paymentList";
import {DatabaseProvider} from "../../../providers/database/DatabaseProvider";

@Component({
  selector: 'page-tripDetail',
  templateUrl: 'tripDetail.html'
})
export class TripDetailPage {

  trip: any;
  totalSpentMoney: any = 0;
  userList: any;

  constructor(public database: DatabaseProvider, private navCtrl: NavController, private navParams: NavParams, private modalCtrl: ModalController,
              private viewCtrl: ViewController, public tripService: TripRestService) {
    this.getTripDetail();
    this.getUsers();
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

  getUsers() {
    this.database.getUsers().then((data: any) => {
      this.userList = data;
      let total: number = 0;
      for (let user of this.userList) {
        total = total + user["money"];
      }
      this.totalSpentMoney = total;
    }, (error) => {
      console.log(error);
    });
  }

  navigatePayment() {
    const myModal = this.modalCtrl.create(PaymentPage, {data: this.trip});
    myModal.onDidDismiss(data => {
    });
    myModal.present();
  }

  navigatePaymentList() {
    const myModal = this.modalCtrl.create(PaymentListPage, {data: this.trip});
    myModal.onDidDismiss(data => {
    });
    myModal.present();
  }

}
