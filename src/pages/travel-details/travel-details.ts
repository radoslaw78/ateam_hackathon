import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TravelChecklistPage } from '../travel-checklist/travel-checklist';
import { TravelServicesPage } from '../travel-services/travel-services';
import { AirportMapPage } from '../airport-map/airport-map';
/**
 * Generated class for the TravelDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-travel-details',
  templateUrl: 'travel-details.html',
})
export class TravelDetailsPage {

  flightData : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.flightData = {
      from: {
        code: "GDN",
        name: "Gdańsk Rębiechowo",
        startDate: '2017-06-12 16:50'
      },
      to: {
        code: "STN",
        name: "London Stansted",
        endDate: '2017-06-12 18:10'
      },
      date: "2017-06-12",
      time: "16:50",
      checklist: {
        done: 5,
        total: 13
      }
    }

  }

  getChecklist() {
    this.navCtrl.push(TravelChecklistPage);
  }

  getServices() {
    this.navCtrl.push(TravelServicesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelDetailsPage');
  }

  airportMap(airportCode: string) {
     this.navCtrl.push(AirportMapPage, airportCode);
   }
}
