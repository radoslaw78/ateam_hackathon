import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAirhelpPage } from './modal-airhelp';

@NgModule({
  declarations: [
    ModalAirhelpPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAirhelpPage),
  ],
  exports: [
    ModalAirhelpPage
  ]
})
export class ModalAirhelpPageModule {}
