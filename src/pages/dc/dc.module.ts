import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DcPage } from './dc';

@NgModule({
  declarations: [
    DcPage,
  ],
  imports: [
    IonicPageModule.forChild(DcPage),
  ],
  exports: [
    DcPage
  ]
})
export class DcPageModule {}
