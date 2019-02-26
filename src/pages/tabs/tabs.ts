import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { DataElectionPage } from '../data-election/data-election';
import { FormatCalculatePage } from '../format-calculate/format-calculate';
import { SettingPage } from '../setting/setting';
import { UploadFilePage } from '../upload-file/upload-file';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DataElectionPage;
  tab3Root = FormatCalculatePage;
  // tab4Root = SettingPage;
  tab5Root = UploadFilePage

  constructor() {
  }
}
