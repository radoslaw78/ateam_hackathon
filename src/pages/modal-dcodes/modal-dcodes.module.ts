import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDcodesPage } from './modal-dcodes';

@NgModule({
  declarations: [
    ModalDcodesPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDcodesPage),
  ],
  exports: [
    ModalDcodesPage
  ]
})
export class ModalDcodesPageModule {}
