import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgEditScorePage } from './dlg-edit-score';

@NgModule({
  declarations: [
    DlgEditScorePage,
  ],
  imports: [
    IonicPageModule.forChild(DlgEditScorePage),
  ],
})
export class DlgEditScorePageModule {}
