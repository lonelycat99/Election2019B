import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ScoreArea } from '../../app/model';
import { EditscorePage } from '../editscore/editscore';
import { Chart } from 'chart.js';

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
  items2: ScoreArea[];
  nameParty: nameParty[] = [];
  score: score[] = [];
  chart: [any];
  @ViewChild('barCanvas') barCanvas;
  public data01: string[] = ['One', 'Two', 'Three'];
  public data02: number[] = [1000, 2000, 3000];
  public data03: string = 'bar';
  xxx: string[];
  yyy: number[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public modalCtrl: ModalController) {
    this.data = this.navParams.get('idtoken');
    this.data2 = this.navParams.get('kadname');
    this.idarea = this.navParams.get('idarea');
    console.log("token");
    console.log(this.data);
    console.log("kadname");
    console.log(this.data2);
    console.log("idarea");
    console.log(this.idarea);


  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad5555555');
    this.http.get<ScoreArea[]>("https://electionvars.azurewebsites.net/api/ElectionV3/GetScoreAreasWithArea/" + this.idarea).subscribe(
      it => {
        this.items = it
        this.items2 = this.items;
        this.items2.forEach(data => {
          this.nameParty.push({ name: data.nameParty })
          this.score.push({ score: data.score })
        })
        console.log(it);
        console.log("it01");
        console.log(this.nameParty);
        console.log("it02");
        console.log(this.score);

        var xxx2 = it.map(it => it.nameParty);
        var yyy2 = it.map(it => it.score);
        console.log("xxxxxxxxxxxxxxxxx");
        console.log(xxx2);
        console.log("yyyyyyyyyyyyyyyyy");
        console.log(yyy2);

        // for (let index = 0; index < this.nameParty.length; index++) {
        // console.log(this.nameParty[index]);
        // }
        this.chart = new Chart(this.barCanvas.nativeElement, {
          type: 'bar',
          data: {
            // labels: ["BJP", "INC", "AAP", "CPI", "CPI-M", "NCP"],
            labels: [this.items[0].nameParty, this.items[1].nameParty],
            datasets: [{
              label: 'พรรค',
              // data: [200, 50, 30, 15, 20, 34],
              data: [this.items[0].score, this.items[1].score],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }

        });
      }
    );
}




ionViewDidLoad() {
  // console.log('ionViewDidLoad DataElectionDetailPage');
  // let accessToken = this.data;
  // let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=00308657-8890-471b-83c7-14169c8d8d3f&groupId=50ffda63-4985-4fdf-b052-c78cee9263ff';
  // let embedReportId = '00308657-8890-471b-83c7-14169c8d8d3f';
  // const basicFilter: pbi.models.IBasicFilter = {
  //   $schema: "http://powerbi.com/product/schema#basic",
  //   target: {
  //     table: "DataMockSS",
  //     column: "พรรคที่ลงแต่ละเขต 8 พรรคหลัก",

  //   },
  //   operator: "In",
  //   values: ["เพื่อไทย"],
  //   filterType: pbi.models.FilterType.BasicFilter
  // }

  // const basicFilter2: pbi.models.IBasicFilter = {
  //   $schema: "http://powerbi.com/product/schema#basic",
  //   target: {
  //     table: "DataMockSS",
  //     column: "เขตแต่ละจังหวัด(กกต)",

  //   },
  //   operator: "In",
  //   values: [this.data2],
  //   filterType: pbi.models.FilterType.BasicFilter
  // }

  // let config: IEmbedConfiguration = {
  //   type: 'report',
  //   tokenType: models.TokenType.Embed,
  //   accessToken: accessToken,
  //   embedUrl: embedUrl,
  //   id: embedReportId,
  //   permissions: models.Permissions.All,
  //   filters: [basicFilter, basicFilter2],
  //   settings: {
  //     filterPaneEnabled: false,
  //     navContentPaneEnabled: false,
  //     layoutType: models.LayoutType.MobilePortrait,
  //     customLayout: {
  //       pageSize: {
  //         type: models.PageSizeType.Widescreen,

  //       },
  //       displayOption: models.DisplayOption.FitToPage,
  //       pagesLayout: {
  //       }
  //     }
  //   }


  // };
  // let reportContainer = <HTMLElement>document.getElementById('reportContainer');
  // let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
  // let report = powerbi.embed(reportContainer, config);
  // report.off("loaded");
}

log(data) {
  console.log(data);

}

Editdata(id) {
  // const modal = this.modalCtrl.create(EditscorePage, {
  //   dataid: id
  // });
  // modal.present();
  this.navCtrl.push(EditscorePage, {
    dataid: id
  });
  console.log(id);

}



}
export class nameParty {
  name: string;
}

export class score {
  score: number;
}
