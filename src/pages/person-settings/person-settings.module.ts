import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonSettingsPage } from './person-settings';

@NgModule({
  declarations: [
    PersonSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonSettingsPage),
  ],
  exports: [
    PersonSettingsPage
  ]
})
export class PersonSettingsPageModule {}
