import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataElectionPage } from '../pages/data-election/data-election';
import { FormatCalculatePage } from '../pages/format-calculate/format-calculate';
import { SettingPage } from '../pages/setting/setting';
import { FormatCalculateDetailPage } from '../pages/format-calculate-detail/format-calculate-detail';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { DataElectionDetailPage } from '../pages/data-election-detail/data-election-detail';
import { EditscorePage } from '../pages/editscore/editscore';
import { UploadFilePage } from '../pages/upload-file/upload-file';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DataElectionPage,
    FormatCalculatePage,
    SettingPage,
    FormatCalculateDetailPage,
    DataElectionDetailPage,
    EditscorePage,
    UploadFilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ChartsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DataElectionPage,
    FormatCalculatePage,
    SettingPage,
    FormatCalculateDetailPage,
    DataElectionDetailPage,
    EditscorePage,
    UploadFilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpClient
  ]
})
export class AppModule { }
