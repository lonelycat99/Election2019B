import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataElectionPage } from './data-election';

@NgModule({
  declarations: [
    DataElectionPage,
  ],
  imports: [
    IonicPageModule.forChild(DataElectionPage),
  ],
})
export class DataElectionPageModule {}
