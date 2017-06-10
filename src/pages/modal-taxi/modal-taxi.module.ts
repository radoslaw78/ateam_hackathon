import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTaxiPage } from './modal-taxi';

@NgModule({
  declarations: [
    ModalTaxiPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTaxiPage),
  ],
  exports: [
    ModalTaxiPage
  ]
})
export class ModalTaxiPageModule {}
