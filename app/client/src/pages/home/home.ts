import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inputText: string;
  key: string = 'username';

  constructor(public navCtrl: NavController, private storage: Storage) {
  }

  saveData() {
    this.storage.set(this.key, this.inputText);
  }

  loadData() {
    this.storage.get(this.key).then((val) => {
      console.log('Your username is ', val);
    });
  }
}
