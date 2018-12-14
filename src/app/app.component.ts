import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { DlgEditScorePage } from '../pages/dlg-edit-score/dlg-edit-score';
import { DlgFormatCalculatePage } from '../pages/dlg-format-calculate/dlg-format-calculate';
import { DataPage } from '../pages/data/data';
import { CalculatePage } from '../pages/calculate/calculate';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Data', component: DataPage },
      { title: 'Calculate', component: CalculatePage },
      { title: 'Dlg-edit-score', component: DlgEditScorePage },
      { title: 'Dlg-format-calculate', component: DlgFormatCalculatePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
