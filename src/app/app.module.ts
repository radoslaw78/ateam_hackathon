import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Dodaj przelot/podróż
import { NewTravelPage } from '../pages/new-travel/new-travel';
// Ustawienia aplikacji
import { AppSettingsPage } from '../pages/app-settings/app-settings';
// Dane osobowe
import { PersonSettingsPage } from '../pages/person-settings/person-settings';
// Tutorial
import { TutorialPage} from '../pages/tutorial/tutorial';

/**
 * TRAVEL PAGES
 */

// Travel Details page
import { TravelDetailsPage } from '../pages/travel-details/travel-details';
// Travel Services page
import { TravelChecklistPage } from '../pages/travel-checklist/travel-checklist';
// Travel Checklist page
import { TravelServicesPage } from '../pages/travel-services/travel-services';
// Disability Code page
import { DcPage } from '../pages/dc/dc';

import { ModalHotelsPage } from '../pages/modal-hotels/modal-hotels';
import { ModalTaxiPage } from '../pages/modal-taxi/modal-taxi';
import { ModalAirhelpPage } from '../pages/modal-airhelp/modal-airhelp';

import { AirportMapPage } from '../pages/airport-map/airport-map';
/**
 * Providers
 */
import { Settings } from '../providers/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export function provideSettings(storage: Storage) {
  return new Settings(storage, {
    option_read_text: false,
    option_style: 'STYLE_DEFAULT',
    option_size: 'SIZE_DEFAULT'
  });
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewTravelPage,
    AppSettingsPage,
    PersonSettingsPage,
    TutorialPage,
    TravelDetailsPage,
    TravelChecklistPage,
    TravelServicesPage,
    DcPage,
    ModalHotelsPage,
    ModalTaxiPage,
    ModalAirhelpPage,
    AirportMapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewTravelPage,
    AppSettingsPage,
    PersonSettingsPage,
    TutorialPage,
    TravelDetailsPage,
    TravelChecklistPage,
    TravelServicesPage,
    DcPage,
    ModalHotelsPage,
    ModalTaxiPage,
    ModalAirhelpPage,
    AirportMapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
