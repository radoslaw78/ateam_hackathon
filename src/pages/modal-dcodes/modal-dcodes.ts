import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the ModalDcodesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-dcodes',
  templateUrl: 'modal-dcodes.html',
})
export class ModalDcodesPage {
  codes : any;
  selectedCodes: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.codes = [
      {"id" : "1", "text" : "WCHR", "description" : "Passenger able to walk by him/herself inside the plane as well as walk down and up stairs, but who requires a wheelchair or other means of transport to move long distances inside the airport.", "done" : false},
      {"id" : "2", "text" : "WCHS", "description" : "Passenger able to walk by him/herself inside the plane, but who cannot walk down or up stairs and who requires a wheelchair or other means of transport to move inside the airport.", "done" : false},
      {"id" : "3", "text" : "WCHC", "description" : "Immobilized passenger requiring a wheelchair to move about and assistance from the time of arrival in the airport until the end of the flight, as well as to exit from the airport.", "done" : false},
      {"id" : "4", "text" : "DEAF", "description" : "Passenger with hearing disability or hearing and speaking disability.", "done" : false},
      {"id" : "5", "text" : "BLIND", "description" : "Passenger with sight disability (distinguish between blind and visually handicapped person)", "done" : false},
      {"id" : "6", "text" : "DEAF/BLIND", "description" : "Passenger with sight and hearing disability and who requires the assistance of an accompanying person to move about.", "done" : false},
      {"id" : "7", "text" : "DPNA", "description" : "Passenger with intellectual or behavioural impairments", "done" : false},
      {"id" : "8", "text" : "ESAN", "description" : "Passenger with an emotional support animal.", "done" : false},
      {"id" : "9", "text" : "PPOC", "description" : "Passenger with an approved portable oxygen concentrator", "done" : false},
      {"id" : "10", "text" : "OXYG", "description" : "Passenger needing oxygen during flight. 7 days notice at airport required.", "done" : false}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDcodesPage');
  }


  dismiss() {
    this.selectedCodes = this.codes.filter( obj => obj.done === true) ;
    this.viewCtrl.dismiss(this.selectedCodes);
  }
}
