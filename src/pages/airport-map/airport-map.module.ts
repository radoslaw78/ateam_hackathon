import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirportMapPage } from './airport-map';

@NgModule({
  declarations: [
    AirportMapPage,
  ],
  imports: [
    IonicPageModule.forChild(AirportMapPage),
  ],
  exports: [
    AirportMapPage
  ]
})
export class AirportMapPageModule {}
