import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html',
})
export class AskPage {

  asks : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.asks = [
      {"id" : "1",  "name" : "Toilet", "icon" : "assets/img/toilet.png","text":"Where is the toilet?"},
      {"id" : "2",  "name" : "Information", "icon" : "assets/img/information.png","text":"Where is the Information Desk?"},
      {"id" : "3",  "name" : "elevator", "icon" : "assets/img/elevator.png","text":"Where is the elevator?"},
      {"id" : "4",  "name" : "entrance", "icon" : "assets/img/entrance.png","text":"Where is the entrance?"},
      {"id" : "5",  "name" : "exit", "icon" : "assets/img/exit.png","text":"Where is the exit?"}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AskPage');
  }

}
