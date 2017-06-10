import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
/**
 * Generated class for the TutorialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 export interface Slide {
   title: string;
   description: string;
   image: string;
 }

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'TravelON',
        description: 'WILL HELP YOU IN YOUR TRAVELS',
        image: 'assets/img/ica-slidebox-img-1.png',
      },
      {
        title: 'GET ORGANIZED',
        description: 'USING CHECKLIST',
        image: 'assets/img/ica-slidebox-img-2.png',
      },
      {
        title: 'GET AROUND',
        description: 'AT AIRPORTS',
        image: 'assets/img/ica-slidebox-img-3.png',
      },
      {
        title: 'ORDER TAXI OR HOTEL',
        description: 'MATCHED FOR YOU',
        image: 'assets/img/ica-slidebox-img-3.png',
      },
      {
        title: 'TELL THE STAFF',
        description: 'ABOUT YOU WITH ONE "DC" CLICK',
        image: 'assets/img/ica-slidebox-img-3.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.setRoot(HomePage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
