import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/DatabaseProvider";
import {Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private userList: any;
  private paymentList: any;
  public todos = [];
  public text: any;

  constructor(public navCtrl: NavController, public database: DatabaseProvider, protected platform: Platform, public alertCtrl: AlertController) {
  }

  createUser() {
    //this.database.crearUser(this.todo.value.name, this.todo.value.phone).then((data) => {
    this.database.createUser('thuat', '123').then((data) => {
      console.log(data);
      this.userList();
    }, (error) => {
      console.log(error);
    })
  }

  getUsers() {
    this.database.getUsers().then((data: any) => {
      this.userList = data;
    }, (error) => {
      console.log(error);
    })
  }

  getPayments() {
    this.database.getPayments().then((data: any) => {
      this.paymentList = data;
    }, (error) => {
      alert(JSON.stringify(error));
      console.log(error);
    })
  }

  truncateUsers() {
    this.presentConfirm();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Reset Database',
      message: 'Are you sure reset all database?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm clicked');
            this.database.resetDatabaseForVufc();
          }
        }
      ]
    });
    alert.present();
  }

}
