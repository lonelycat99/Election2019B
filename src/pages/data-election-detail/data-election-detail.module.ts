import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataElectionDetailPage } from './data-election-detail';

@NgModule({
  declarations: [
    DataElectionDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DataElectionDetailPage),
  ],
})
export class DataElectionDetailPageModule {}
