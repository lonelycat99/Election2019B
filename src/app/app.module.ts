import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DlgEditScorePage } from '../pages/dlg-edit-score/dlg-edit-score';
import { DlgFormatCalculatePage } from '../pages/dlg-format-calculate/dlg-format-calculate';
import { DataPage } from '../pages/data/data';
import { CalculatePage } from '../pages/calculate/calculate';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DlgEditScorePage,
    DlgFormatCalculatePage,
    DataPage,
    CalculatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DlgEditScorePage,
    DlgFormatCalculatePage,
    DataPage,
    CalculatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
