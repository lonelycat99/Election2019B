import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KaddetailPage } from './kaddetail';

@NgModule({
  declarations: [
    KaddetailPage,
  ],
  imports: [
    IonicPageModule.forChild(KaddetailPage),
  ],
})
export class KaddetailPageModule {}
