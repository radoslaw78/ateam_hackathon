import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the NewTravelPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-travel',
  templateUrl: 'new-travel.html',
})
export class NewTravelPage {
  newFlight: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTravelPage');
  }

  saveNewTravel() {
    //get flight
    this.newFlight =
      {
        from: { code: "STN", name: "London Stansted" },
        to: { code: "GDN", name: "Gdańsk Rębiechowo" },
        date: "2017-06-14", time: "09:50"
      };

    this.navCtrl.push(HomePage, this.newFlight);

  }

}
