import {Component} from '@angular/core';
import {NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {ToastController} from 'ionic-angular';
import {TripRestService} from "../../../../providers/rest/TripRestService";

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  inputMoney: number;
  inputPayer: string;
  key: string = 'data';
  payments: any;

  constructor(private navCtrl: NavController, private navParams: NavParams, private modalCtrl: ModalController,
              private viewCtrl: ViewController, private storage: Storage, private toastCtrl: ToastController, public tripService: TripRestService) {
    this.payments = this.getPayment();
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  payMoney() {
    this.storage.set(this.key, this.inputMoney);
    this.presentToast();
    this.inputMoney = null; //clear form
    this.inputPayer = null; //clear form
    this.closeModal();
  }

  loadData() {
    this.storage.get(this.key).then((val) => {
      console.log('Payment is ', val);
    });
  }

  /*
   * TODO: Below is temporary get local data
   */
  getPayment() {
    this.tripService.getLocalPayment()
      .then(data => {
        this.payments = data;
        console.log(this.payments);
      });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'New peyment was added successfully',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
