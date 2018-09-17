import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class TripRestService {

  apiUrl = 'https://?.com'; //TODO: get from server

  constructor(public http: HttpClient) {
    console.log('Hello TripRestService Provider');
  }

  getLocalTrips() {
    return new Promise(resolve => {
      this.http.get('assets/data/trips.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
