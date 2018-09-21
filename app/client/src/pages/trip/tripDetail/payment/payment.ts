import {Component} from '@angular/core';
import {NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {ToastController} from 'ionic-angular';
import {TripRestService} from "../../../../providers/rest/TripRestService";
import {DatabaseProvider} from "../../../../providers/database/DatabaseProvider";

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  inputMoney: number;
  inputPayer: string;
  inputActivity: string;
  key: string = 'data';
  payments: any;
  userList: any;

  constructor(public database: DatabaseProvider, private navCtrl: NavController, private navParams: NavParams, private modalCtrl: ModalController,
              private viewCtrl: ViewController, private storage: Storage, private toastCtrl: ToastController, public tripService: TripRestService) {
    this.getPayment();
    this.getUsers();

  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  payMoney() {
    //this.storage.set(this.key, this.inputMoney);
    this.database.createPayment(this.inputActivity, this.inputPayer, this.inputMoney).then((data) => {
    }, (error) => {
      console.log(error);
    });
    // TODO: I'm crazy, therefore below code is bull shit
    let totalUseMoney = 0;
    for (let user of this.payments) {
      if (user["isChecked"]) {
        totalUseMoney++;
      }
    }

    for (let user of this.payments) {
      if (user["isChecked"]) {
        let oldMoney: number = this.userList[user["friendId"]-1]["money"];
        let newMoney: number = oldMoney - (this.inputMoney / totalUseMoney);
        this.database.updateUser(user["friendId"], newMoney);
      }
    }
    this.presentToast();
    this.inputMoney = null; //clear form
    this.inputPayer = null; //clear form
    this.inputActivity = null; //clear form
    /*console.log("after:" + this.payments[0]["isChecked"]);*/
    this.closeModal();

  }

  //TODO: below code is bull shit because it load data again, we need to refactor it
  getUsers() {
    this.database.getUsers().then((data: any) => {
      this.userList = data;
    }, (error) => {
      console.log(error);
    });
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
      message: 'New payment was added successfully',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
