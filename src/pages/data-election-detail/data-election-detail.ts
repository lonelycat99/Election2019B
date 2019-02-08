import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';
import { HttpClient } from '@angular/common/http';
import { ScoreArea } from '../../app/model';
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
  idarea: any = {};
  items: ScoreArea[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.data = this.navParams.get('idtoken');
    this.data2 = this.navParams.get('kadname');
    this.idarea = this.navParams.get('idarea');
    console.log("token");
    console.log(this.data);
    console.log("kadname");
    console.log(this.data2);
    console.log("idarea");
    console.log(this.idarea);

    this.http.get<ScoreArea[]>("https://electionvars.azurewebsites.net/api/ElectionV2/GetScoreArea/" + this.idarea).subscribe(
      it => {
        this.items = it
        console.log(it);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataElectionDetailPage');
    let accessToken = this.data;
    let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=00308657-8890-471b-83c7-14169c8d8d3f&groupId=50ffda63-4985-4fdf-b052-c78cee9263ff';
    let embedReportId = '00308657-8890-471b-83c7-14169c8d8d3f';
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
