import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Settings } from '../../providers/settings';
/**
 * Generated class for the AppSettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-app-settings',
  templateUrl: 'app-settings.html',
})
export class AppSettingsPage {

  options: any;

  settingsReady = false;

  form: FormGroup;

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  constructor(public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public toast: ToastController) {
  }

  _buildForm() {
    let group: any = {
      option_size: [this.options.option_size],
      option_style: [this.options.option_style],
      option_read_text: [this.options.option_read_text]
    };

    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.settings.merge(this.form.value);
    });
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});
  }

  ionViewWillEnter() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });
  }

  saveSettings () {
    this.settings.save();
    let toast = this.toast.create({
      message: 'Settings was saved successfully',
      duration: 3000
    });
    toast.present();
  }
  
  ngOnChanges() {
    console.log('Ng All Changes');
  }

}
