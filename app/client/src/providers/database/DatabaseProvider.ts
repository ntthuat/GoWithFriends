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

  getUsers() {
    return new Promise((resolve, reject) => {
      this.db.executeSql("SELECT * FROM friend", []).then((data) => {
        let users = [];
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            users.push({
              userId: data.rows.item(i).userId,
              name: data.rows.item(i).name,
              phone: data.rows.item(i).phone,
            });
          }
        }
        resolve(users);
      }, (error) => {
        reject(error);
      })
    });
  }

  truncateUsers() {
    return new Promise((resolve, reject) => {
      this.db.executeSql("DELETE FROM friend", []).then((data) => {
        let users = [];
        resolve(users);
      }, (error) => {
        reject(error);
      })
    });
  }

  resetDatabaseForVufc() {
    this.truncateUsers();
    this.createUser('LLL', '093 917 49 72');
    this.createUser('Nhung', '?');
  }

}
