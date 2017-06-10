import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AirportMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-airport-map',
  templateUrl: 'airport-map.html',
})
export class AirportMapPage {
airport: any;

  airports = [
  	{
    	"city" : "Gdansk",
    	"name" : "Lech Walesa",
    	"iata" : "GDN",
    	"icao" : "EPGD",
    	"tel"  : "48 525 673 531",
    	"mail" : "airport@airport.gdansk.pl"
  	},
    {
    	"city" : "London",
    	"name" : "Stansted",
    	"iata" : "STN",
    	"icao" : "EGSS",
    	"tel"  : "0800 093 7851",
    	"mail" : "stanstednoiseline@stanstedairport.com"
  	}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    for (var i = 0;i<this.airports.length;i++){
      if (this.airports[i].iata === this.navParams.data) {
        this.airport = this.airports[i];
      }
    }
  }

  ionViewDidLoad() {

  }

}
