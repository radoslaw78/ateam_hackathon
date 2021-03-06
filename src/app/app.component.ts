import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TutorialPage} from '../pages/tutorial/tutorial';

/* PAGES */

// Dodaj przelot/podróż
import { NewTravelPage } from '../pages/new-travel/new-travel';
// Ustawienia aplikacji
import { AppSettingsPage } from '../pages/app-settings/app-settings';
// Dane osobowe
import { PersonSettingsPage } from '../pages/person-settings/person-settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TutorialPage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', icon: 'home', component: HomePage },
      { title: 'New Travel', icon: 'plane', component: NewTravelPage },
      { title: 'My information', icon: 'person', component: PersonSettingsPage },
      { title: 'App settings', icon: 'settings', component: AppSettingsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
