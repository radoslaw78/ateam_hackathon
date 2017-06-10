import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TravelChecklistPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-travel-checklist',
  templateUrl: 'travel-checklist.html',
})
export class TravelChecklistPage {

  list: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = [
      {"id" : "1", "text" : "Airport call 48 hrs prior", "done" : "false"},
      {"id" : "2", "text" : "Money", "done" : "false"},
      {"id" : "3", "text" : "Passport", "done" : "false"},
      {"id" : "4", "text" : "Tickets", "done" : "false"},
      {"id" : "5", "text" : "Medical insurance card", "done" : "false"},
      {"id" : "6", "text" : "Insurance", "done" : "false"},
      {"id" : "7", "text" : "Medical prescriptions", "done" : "false"},
      {"id" : "8", "text" : "Medicaments", "done" : "false"},
      {"id" : "9", "text" : "Phone & charger", "done" : "false"},
      {"id" : "10", "text" : "Laptop", "done" : "false"},
      {"id" : "11", "text" : "Adapter", "done" : "false"},
      {"id" : "12", "text" : "Maps", "done" : "false"},
      {"id" : "13", "text" : "Cosmetics", "done" : "false"},
      {"id" : "13", "text" : "Clothes", "done" : "false"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelChecklistPage');
  }

}
