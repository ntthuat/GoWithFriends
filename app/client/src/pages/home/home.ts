import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DatabaseProvider} from "../../providers/database/DatabaseProvider";
import {Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private userList: any;
  public todos = [];
  public text : any;

  constructor(public navCtrl: NavController, public database: DatabaseProvider, protected platform: Platform) {
  }

  createUser() {
    //this.database.crearUser(this.todo.value.name, this.todo.value.phone).then((data) => {
    this.database.createUser(null, null).then((data) => {
      console.log(data);
      this.userList();
    }, (error) => {
      console.log(error);
    })
  }

  getUsers() {
    this.database.getUsers().then((data: any) => {
      console.log(data);
      this.userList = data;
    }, (error) => {
      console.log(error);
    })
  }

}
