import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalHotelsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-hotels',
  templateUrl: 'modal-hotels.html',
})
export class ModalHotelsPage {
  hotels: any;

  selectedHotel: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.hotels = [
      {"id" : "1", "name" : "Hotel Comfort Sleeps", "address" : "ul. Cicha 16"},
      {"id" : "2", "name" : "Hotel Golden Gate", "address" : "ul. Zlota Brama 11"},
      {"id" : "3", "name" : "Hotel Green Factory", "address" : "ul. Mickiewicza 4"}
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalHotelsPage');
  }

  selectHotel(object : any) {
    this.selectedHotel = object;
    this.dismiss();
  }

  dismiss() {
    let h = this.selectedHotel ? this.selectedHotel : {};
    this.viewCtrl.dismiss(h);
  }
}
