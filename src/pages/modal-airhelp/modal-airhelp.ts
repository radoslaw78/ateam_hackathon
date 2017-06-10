import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the ModalAirhelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-airhelp',
  templateUrl: 'modal-airhelp.html',
})
export class ModalAirhelpPage {
  airhelps: any;
  selectedAirhelp: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.airhelps = [
    {"id" : "1", "name" : "Report Delay","response":"Your report on delay has been received. We will contact you shortly"},
    {"id" : "2", "name" : "Report Cancelation","response":"Your report on cancelation has been received. We will contact you shortly"},
    {"id" : "2", "name" : "Report Lost Luggage","response":"Your report on lost luggage has been received. We will contact you shortly"}
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAirhelpPage');
  }

  selectAirhelp(object : any) {
    this.selectedAirhelp = object;
    this.dismiss();
  }

  dismiss() {
    let h = this.selectedAirhelp ? this.selectedAirhelp : {};
    this.viewCtrl.dismiss(h);
  }
}
