import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTravelPage } from './new-travel';

@NgModule({
  declarations: [
    NewTravelPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTravelPage),
  ],
  exports: [
    NewTravelPage
  ]
})
export class NewTravelPageModule {}
