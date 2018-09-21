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
        /*        db.executeSql("DROP TABLE IF EXISTS friend", []);
                db.executeSql("DROP TABLE IF EXISTS payment", []);*/
        db.executeSql("CREATE TABLE IF NOT EXISTS friend (friendId INTEGER PRIMARY KEY, name TEXT, phone TEXT, money INTEGER)", []);
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

  updateUser(friendId: number, money: number) {
    return new Promise((resolve, reject) => {
      let sql = "UPDATE friend SET money = ? WHERE friendId = ?";
      this.db.executeSql(sql, [money, friendId]).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  createFullUser(friendId: number, name: string, phone: string, money: number) {
    return new Promise((resolve, reject) => {
      let sql = "INSERT INTO friend (friendId, name, phone, money) VALUES (?, ?, ?, ?)";
      this.db.executeSql(sql, [friendId, name, phone, money]).then((data) => {
        resolve(data);
      }, (error) => {
        alert(JSON.stringify(error));
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
              money: data.rows.item(i).money
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
    //this.createUser('Nhung', '?');
    this.createFullUser(1, 'LLL', '093 917 49 72', -1355277);
    this.createFullUser(2, 'Nhung', '?', -1355277);
    this.createFullUser(3, 'Oanh', '?', -1355277);
    this.createFullUser(4, 'Thủy', '?', -1355277);
    this.createFullUser(5, 'Thiết', '?', -1355277);
    this.createFullUser(6, 'Bích Ngọc', '?', -1355277);
    this.createFullUser(7, 'Đam', '?', -1355277);
    this.createFullUser(8, 'Trang', '?', -1355277);
    this.createFullUser(9, 'Đạt', '?', -1355277);
    this.createFullUser(10, 'Luyến', '?', -1355277);
    this.createFullUser(11, 'Sơn', '?', -1355277);
    this.createFullUser(12, 'Tuyền', '?', -985197);
    this.createFullUser(13, 'Dương', '?', -1355277);
    this.createFullUser(14, 'Hạnh', '?', -1355277);
    this.createFullUser(15, 'Thuật', '?', -1355277);
    this.createFullUser(16, 'Phương', '?', -1355277);
    this.createFullUser(17, 'Khánh', '?', -1355277);
    this.createFullUser(18, 'Ngân', '?', -1355277);
    this.createFullUser(19, 'Thái', '?', -1355277);
    this.createFullUser(20, 'Thương', '?', -1355277);
    this.createFullUser(21, 'Thúy', '?', -790080);
    this.createFullUser(22, 'Duy', '?', -1355277);
    this.createFullUser(23, 'Hảo', '?', -1230277);
    this.createFullUser(24, 'Nguyên', '?', -1355277);
    this.createFullUser(25, 'Trường', '?', -1355277);
    this.createFullUser(26, 'Kim Ngọc', '?', -1355277);

    // payment table
    this.truncatePayment();
    this.createPayment('Vé tàu hỏa', 'LLL', 6127000);
    this.createPayment('Vé máy bay', 'LLL', 24629936);
    this.createPayment('Đổi vé máy bay', 'LLL', 420000);
    this.createPayment('HomeStay - cọc', 'LLL', 3000000);
  }

}
