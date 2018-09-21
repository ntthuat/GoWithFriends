import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {TripRestService} from "../../../../providers/rest/TripRestService";
import {DatabaseProvider} from "../../../../providers/database/DatabaseProvider";

@Component({
  selector: 'page-paymentList',
  templateUrl: 'paymentList.html'
})
export class PaymentListPage {

  private paymentList: any;

  constructor(private viewCtrl: ViewController, public tripService: TripRestService, public database: DatabaseProvider) {
    this.getPayments();
  }

  getPayments() {
    this.database.getPayments().then((data: any) => {
      this.paymentList = data;
    }, (error) => {
      console.log(error);
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
