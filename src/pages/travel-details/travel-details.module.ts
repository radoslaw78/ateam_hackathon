import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelDetailsPage } from './travel-details';

@NgModule({
  declarations: [
    TravelDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelDetailsPage),
  ],
  exports: [
    TravelDetailsPage
  ]
})
export class TravelDetailsPageModule {}
