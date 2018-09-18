import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {TripRestService} from "../../../../providers/rest/TripRestService";

@Component({
  selector: 'page-paymentList',
  templateUrl: 'paymentList.html'
})
export class PaymentListPage {

  constructor(private viewCtrl: ViewController, public tripService: TripRestService) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
