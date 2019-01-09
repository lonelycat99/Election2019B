import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { DataElectionPage } from '../data-election/data-election';
import { FormatCalculatePage } from '../format-calculate/format-calculate';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DataElectionPage;
  tab3Root = FormatCalculatePage;
  tab4Root = SettingPage;

  constructor() {

  }
}
