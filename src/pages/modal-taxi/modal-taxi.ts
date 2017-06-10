import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the ModalTaxiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-taxi',
  templateUrl: 'modal-taxi.html',
})
export class ModalTaxiPage {
    taxis: any;

    selectedTaxi: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
      this.taxis = {"id" : "1", "name" : "Marcin", "car":"Toyota Corolla", "phone" : "505 505 678"};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalTaxiPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
