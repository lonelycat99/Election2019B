import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';
/**
 * Generated class for the DataElectionDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-election-detail',
  templateUrl: 'data-election-detail.html',
})
export class DataElectionDetailPage {
  data: any = {};
  data2: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('idtoken');
    this.data2 = this.navParams.get('kadname');
    console.log("token");
    console.log(this.data);
    console.log("kadname");
    console.log(this.data2);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataElectionDetailPage');
    let accessToken = this.data;
    let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=f39c1e8b-dbe1-4b5b-bf55-1a27948bee47&groupId=45f95249-7ae8-4335-899b-d66de3334065';
    let embedReportId = 'f39c1e8b-dbe1-4b5b-bf55-1a27948bee47';
    const basicFilter: pbi.models.IBasicFilter = {
      $schema: "http://powerbi.com/product/schema#basic",
      target: {
        table: "DataMockSS",
        column: "พรรคที่ลงแต่ละเขต 8 พรรคหลัก",

      },
      operator: "In",
      values: ["เพื่อไทย"],
      filterType: pbi.models.FilterType.BasicFilter
    }

    const basicFilter2: pbi.models.IBasicFilter = {
      $schema: "http://powerbi.com/product/schema#basic",
      target: {
        table: "DataMockSS",
        column: "เขตแต่ละจังหวัด(กกต)",

      },
      operator: "In",
      values: [this.data2],
      filterType: pbi.models.FilterType.BasicFilter
    }

    let config: IEmbedConfiguration = {
      type: 'report',
      tokenType: models.TokenType.Embed,
      accessToken: accessToken,
      embedUrl: embedUrl,
      id: embedReportId,
      permissions: models.Permissions.All,
      filters: [basicFilter, basicFilter2],
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false,
        layoutType: models.LayoutType.MobilePortrait,
        customLayout: {
          pageSize: {
            type: models.PageSizeType.Widescreen,

          },
          displayOption: models.DisplayOption.FitToPage,
          pagesLayout: {
          }
        }
      }


    };
    let reportContainer = <HTMLElement>document.getElementById('reportContainer');
    let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
    let report = powerbi.embed(reportContainer, config);
    report.off("loaded");
  }

}
