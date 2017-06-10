import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelServicesPage } from './travel-services';

@NgModule({
  declarations: [
    TravelServicesPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelServicesPage),
  ],
  exports: [
    TravelServicesPage
  ]
})
export class TravelServicesPageModule {}
