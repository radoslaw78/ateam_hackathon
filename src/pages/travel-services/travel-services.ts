import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalHotelsPage } from '../modal-hotels/modal-hotels';
import { ModalTaxiPage} from '../modal-taxi/modal-taxi';
import { ModalAirhelpPage} from '../modal-airhelp/modal-airhelp';
/**
 * Generated class for the TravelServicesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-travel-services',
  templateUrl: 'travel-services.html',
})
export class TravelServicesPage {

  selectedHotel : any;
  selectedAirhelp: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelServicesPage');
  }

  presentHotels() {
    let loader = this.loadingCtrl.create({
      content: "Searching hotels...",
      duration: 3000
    });

    loader.present();

    let modal = this.modalCtrl.create(ModalHotelsPage);

    modal.onDidDismiss(data => {
      this.selectedHotel = data;
    });

    setTimeout(function(){
      loader.dismiss();
      modal.present();
    }, 1000);
  }


presentTaxis() {
  let loader = this.loadingCtrl.create({
    content: "Searching taxi...",
    duration: 3000
  });

  loader.present();

  let modal = this.modalCtrl.create(ModalTaxiPage);

  //modal.onDidDismiss(data => {});

  setTimeout(function(){
    loader.dismiss();
    modal.present();
  }, 1000);
}

presentAirhelp() {
  let loader = this.loadingCtrl.create({
    content: "Processing ...",
    duration: 1500
  });

  loader.present();

  let modal = this.modalCtrl.create(ModalAirhelpPage);

  modal.onDidDismiss(data => {
    this.selectedAirhelp = data;
  });

  setTimeout(function(){
    loader.dismiss();
    modal.present();
  }, 1000);
}

}
