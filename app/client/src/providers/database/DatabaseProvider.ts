import {Injectable} from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen: boolean;

  constructor(
    public storage: SQLite) {

    if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.create({name: "GoWithFriendsDB", location: "default"}).then((db: SQLiteObject) => {
        this.db = db;
        db.executeSql("CREATE TABLE IF NOT EXISTS friend (friendId INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone TEXT)", []);
        db.executeSql("CREATE TABLE IF NOT EXISTS payment (paymentId INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, payer TEXT, money INTEGER)", []);
        this.isOpen = true;
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  createUser(name: string, phone: string) {
    return new Promise((resolve, reject) => {
      let sql = "INSERT INTO friend (name, phone) VALUES (?, ?)";
      this.db.executeSql(sql, [name, phone]).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  createPayment(name: string, payer: string, money: number) {
    return new Promise((resolve, reject) => {
      let sql = "INSERT INTO payment (name, payer, money) VALUES (?, ?, ?)";
      this.db.executeSql(sql, [name, payer, money]).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  truncatePayment() {
    return this.truncateTable('payment');
  }

  truncateTable(tableName: string) {
    return new Promise((resolve, reject) => {
      this.db.executeSql("DELETE FROM " + tableName, []).then((data) => {
        resolve();
      }, (error) => {
        reject(error);
      })
    });
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM friend", []).then((data) => {
        let friends = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            friends.push({
              friendId: data.rows.item(i).friendId,
              name: data.rows.item(i).name,
              phone: data.rows.item(i).phone,
            });
          }
        }
        resolve(friends);
      }, (error) => {
        reject(error);
      })
    });
  }

  getPayments() {
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM payment", []).then((data) => {
        let payments = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            payments.push({
              paymentId: data.rows.item(i).paymentId,
              name: data.rows.item(i).name,
              payer: data.rows.item(i).payer,
              money: data.rows.item(i).money
            });
          }
        }
        resolve(payments);
      }, (error) => {
        reject(error);
      })
    });
  }

  truncateFriend() {
    return this.truncateTable('friend');
  }

  resetDatabaseForVufc() {
    this.truncateFriend();
    this.createUser('LLL', '093 917 49 72');
    this.createUser('Nhung', '?');

    // payment table
    this.truncatePayment();
    this.createPayment('Vé tàu hỏa', 'LLL', 6127000);
    this.createPayment('Vé máy bay', 'LLL', 24629936);
    this.createPayment('Đổi vé máy bay', 'LLL', 420000);
    this.createPayment('HomeStay - cọc', 'LLL', 3000000);
  }

}
