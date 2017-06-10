import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NewTravelPage } from '../new-travel/new-travel';
import { DcPage } from '../dc/dc';
import { TravelDetailsPage } from '../travel-details/travel-details';
import { AskPage } from '../ask/ask';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  flights : Array<any>;

  constructor(public navCtrl: NavController, public navPam: NavParams) {
    this.flights = [
      {
        from: { code: "GDN", name: "Gdańsk Rębiechowo" },
        to: { code: "STM", name: "London Stansted" },
        date: "2017-06-12", time: "16:50"
      }
    ];

    if ( typeof this.navPam.get('date') !== 'undefined') {
      this.flights.push(this.navPam.data);
    };
  }

  gotoTravelDetails() {
    this.navCtrl.push(TravelDetailsPage);
  }

  setNewTravel() {
    this.navCtrl.push(NewTravelPage);
  }

  showDisabilityCode() {
    this.navCtrl.push(DcPage);
  }

  showAskPage() {
    this.navCtrl.push(AskPage);
  }


}
