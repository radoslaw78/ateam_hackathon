import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalHotelsPage } from './modal-hotels';

@NgModule({
  declarations: [
    ModalHotelsPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalHotelsPage),
  ],
  exports: [
    ModalHotelsPage
  ]
})
export class ModalHotelsPageModule {}
