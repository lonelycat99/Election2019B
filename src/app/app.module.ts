import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CaretakerPage } from '../pages/caretaker/caretaker';
import { DlgEditScorePage } from '../pages/dlg-edit-score/dlg-edit-score';
import { DlgFormatCalculatePage } from '../pages/dlg-format-calculate/dlg-format-calculate';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CaretakerPage,
    DlgEditScorePage,
    DlgFormatCalculatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CaretakerPage,
    DlgEditScorePage,
    DlgFormatCalculatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
