import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelChecklistPage } from './travel-checklist';

@NgModule({
  declarations: [
    TravelChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelChecklistPage),
  ],
  exports: [
    TravelChecklistPage
  ]
})
export class TravelChecklistPageModule {}
