import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ScoreArea, otherScore, GetScoreParty, GlobalVaraible, TextTag } from '../../app/model';
import { EditscorePage } from '../editscore/editscore';
import { Chart } from 'chart.js';
import { stringify } from '@angular/core/src/render3/util';

@IonicPage()
@Component({
  selector: 'page-data-election-detail',
  templateUrl: 'data-election-detail.html',
})
export class DataElectionDetailPage {
  idArea: string;
  nameArea: string;
  listScoreParty: ScoreArea[];
  listScorePartyChart: ScoreArea[] = [];
  listOther: ScoreArea[];
  other: otherScore = new otherScore;
  chart: [any];
  getTag: TextTag = new TextTag;
  @ViewChild('barCanvas') barCanvas;
  xxx: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public modalCtrl: ModalController, public alertController: AlertController, public loadingCtrl: LoadingController) {
    this.idArea = this.navParams.get('_idArea');
    this.nameArea = this.navParams.get('_nameArea');
    console.log(this.idArea);
    console.log(this.nameArea);
  }

  ionViewDidEnter() {
    // "https://electionvars.azurewebsites.net/api/ElectionV3/GetAllAreaMaxScore"
    // "http://localhost:5000/api/ElectionV3/GetScoreMyParty"
    // GlobalVaraible.host + "GetScoreMyParty"
    this.http.get<ScoreArea[]>(GlobalVaraible.host + "GetScoreAreasWithArea/" + this.idArea).subscribe(
      data => {
        this.listScoreParty = data;
        let xxx = this.listScoreParty;
        this.listOther = this.listScoreParty.slice(5);
        this.other = { name: "อื่นๆ", score: 0 };
        this.listOther.forEach(data => {
          this.other.score += data.score;
        });

        function getRandomColorHex(index) {
          for (let i = 0; i < xxx.length; i++) {
            var color = "";
            if (xxx[index].nameInitial == "อนค.") {
              color = "#FF7F00"
            } else if (xxx[index].nameInitial == "ภท.") {
              color = "#00008B"
            } else if (xxx[index].nameInitial == "ปชป.") {
              color = "#00BFFF"
            } else if (xxx[index].nameInitial == "ทษช.") {
              color = "#0000EE"
            } else if (xxx[index].nameInitial == "สร.") {
              color = "#27408B"
            } else if (xxx[index].nameInitial == "พท.") {
              color = "#FF0000"
            } else if (xxx[index].nameInitial == "พปชร.") {
              color = "#4876FF"
            } else if (xxx[index].nameInitial == "รปช.") {
              color = "#0000FF"
            } else if (xxx[index].nameInitial == "ชทพ.") {
              color = "#FF69B4"
            } else if (xxx[index].nameInitial == "พ.พ.ช.") {
              color = "#CD0000"
            } else if (xxx[index].nameInitial == "ปชช.") {
              color = "#FFFF00"
            } else if (xxx[index].nameInitial == "ปช.") {
              color = "#CD0000"
            } else {
              color = "#7F7E7F"
            }
            // else if (xxx[i].nameInitial == "ชทพ.") {
            //   color = "#00008B"
            // } else if (xxx[i].nameInitial == "ปชป.") {
            //   color = "#00BFFF"
            // } else {
            //   color = "#FF33FE"
            // }
            console.log("color");
            console.log(color);
            console.log("xxxx");
            console.log(xxx[index]);
            return color;
          }
        }

        this.chart = new Chart(this.barCanvas.nativeElement, {
          type: 'bar',
          data: {
            // labels: ["BJP", "INC", "AAP", "CPI", "CPI-M", "NCP"],
            labels: [this.listScoreParty[0].nameParty, this.listScoreParty[1].nameParty, this.listScoreParty[2].nameParty
              , this.listScoreParty[3].nameParty, this.listScoreParty[4].nameParty, this.other.name],
            datasets: [{
              label: ['คะแนนของ' + this.nameArea],
              // data: [200, 50, 30, 15, 20, 34],
              data: [this.listScoreParty[0].score, this.listScoreParty[1].score, this.listScoreParty[2].score
                , this.listScoreParty[3].score, this.listScoreParty[4].score, this.other.score],
              backgroundColor: [
                getRandomColorHex(0),
                getRandomColorHex(1),
                getRandomColorHex(2),
                getRandomColorHex(3),
                getRandomColorHex(4),
                "#7F7E7F",
              ],
              borderWidth: 1
            }]
          },
          options: {
            legend: {
              display: false
            },
            tooltips: {
              callbacks: {
                label: function (tooltipItem) {
                  return tooltipItem.yLabel;
                }
              }
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      });

    this.http.get<TextTag>(GlobalVaraible.host + "GetTagArea/" + this.idArea)
      .subscribe(data => {
        console.log(data);
        this.getTag = data;
      });
  }

  Editdata(dataScore: ScoreArea) {
    this.navCtrl.push(EditscorePage, {
      _dataScore: dataScore
    });
  }

  sendtag() {
    // https://electionvars.azurewebsites.net/api/ElectionV3/SetTags/
    const loader = this.loadingCtrl.create({
      content: 'กรุณารอสักครู่ กำลังตั้งค่า Tag...',
      duration: 300000,
      dismissOnPageChange: true
    })
    loader.present();
    this.http.post(GlobalVaraible.host + "SetTags/" + this.idArea, this.getTag)
      .subscribe(data => {
        const confirm = this.alertController.create({
          title: 'เพิ่มTagสำเร็จ',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                loader.dismiss();
              }
            }
          ]
        });
        confirm.present();
        console.log(data);
      });
  }
}

