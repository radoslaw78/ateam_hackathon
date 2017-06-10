import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController) {
    }

  _buildForm() {
    this.form = {
      user_name: null,
      user_ice: null,
      user_gender: null,
      user_nationality: null,
      user_disabilities: null
    };
  }

  ionViewDidLoad() {
      this._buildForm();
  }
  ionViewWillEnter() {
    this._buildForm();
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
