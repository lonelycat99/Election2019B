import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ScoreArea, otherScore, GetScoreParty, GlobalVaraible } from '../../app/model';
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
  @ViewChild('barCanvas') barCanvas;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public modalCtrl: ModalController) {
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
        let count = 0;
        this.listOther = [];
        this.listScoreParty.forEach(data => {
          if (count > 4) {
            this.listOther.push(data);
          }
          count += 1;
        });
        this.other = { name: "อื่นๆ", score: 0 };
        // this.other = { name: "อื่นๆ", score: 0 };
        this.listOther.forEach(data => {
          this.other.score += data.score;
        });

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
      });
  }

  Editdata(dataScore: ScoreArea) {
    this.navCtrl.push(EditscorePage, {
      _dataScore: dataScore
    });
  }

}

