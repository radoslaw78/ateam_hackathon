import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ModalDcodesPage } from '../modal-dcodes/modal-dcodes';
/**
 * Generated class for the PersonSettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-person-settings',
  templateUrl: 'person-settings.html',
})
export class PersonSettingsPage {

  options: any;
  settingsReady = false;
  form: any;
  disabilitiesCodes: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public modalCtrl: ModalController) {
      this.form = {
        user_name: null,
        user_ice: null,
        user_gender: null,
        user_nationality: null,
        user_disabilities: []
      };
    }

  openModalDcodes() {
    let modal = this.modalCtrl.create(ModalDcodesPage);

    modal.onDidDismiss(data => {
      this.disabilitiesCodes = data;
      console.log(this.disabilitiesCodes);
    });

    modal.present();
  }

  ionViewDidLoad() {
  }
  ionViewWillEnter() {
  }

  saveSettings () {
    //this.settings.save();
    let toast = this.toast.create({
      message: 'Settings was saved successfully',
      duration: 2000
    });
    toast.present();
  }
}
