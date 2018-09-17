import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class FriendModel {

  name: string;
  phone: string;
  email: string;

  constructor(public http: HttpClient) {
    console.log('Hello FriendRestService Provider');
  }
}
