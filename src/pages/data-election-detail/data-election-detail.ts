import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ScoreArea, otherScore } from '../../app/model';
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
  listTop5: ScoreArea[] = [];
  listOther: ScoreArea[] = [];
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
    this.http.get<ScoreArea[]>("http://localhost:5000/api/ElectionV3/GetScoreAreasWithArea/" + this.idArea).subscribe(
      data => {
        this.listScoreParty = data;
        for (let i = 0; i < this.listScoreParty.length; i++) {
          if (i < 5) {
            this.listTop5.push({
              id: this.listScoreParty[i].id,
              idArea: this.listScoreParty[i].idArea,
              idParty: this.listScoreParty[i].idParty,
              nameArea: this.listScoreParty[i].nameArea,
              nameInitial: this.listScoreParty[i].nameInitial,
              nameParty: this.listScoreParty[i].nameParty,
              nameRegister: this.listScoreParty[i].nameRegister,
              noRegister: this.listScoreParty[i].noRegister,
              score: this.listScoreParty[i].score,
              source: this.listScoreParty[i].score,
              status: this.listScoreParty[i].status,
              tags: this.listScoreParty[i].tags,
              statusEdit: this.listScoreParty[i].statusEdit
            });
          }
          else {
            this.listOther.push({
              id: this.listScoreParty[i].id,
              idArea: this.listScoreParty[i].idArea,
              idParty: this.listScoreParty[i].idParty,
              nameArea: this.listScoreParty[i].nameArea,
              nameInitial: this.listScoreParty[i].nameInitial,
              nameParty: this.listScoreParty[i].nameParty,
              nameRegister: this.listScoreParty[i].nameRegister,
              noRegister: this.listScoreParty[i].noRegister,
              score: this.listScoreParty[i].score,
              source: this.listScoreParty[i].score,
              status: this.listScoreParty[i].status,
              tags: this.listScoreParty[i].tags,
              statusEdit: this.listScoreParty[i].statusEdit
            });
          }
          this.other = { name: "อื่นๆ", score: 0 };
          this.listOther.forEach(data => {
            this.other.score += data.score;
          });
        }

        this.chart = new Chart(this.barCanvas.nativeElement, {
          type: 'bar',
          data: {
            // labels: ["BJP", "INC", "AAP", "CPI", "CPI-M", "NCP"],
            labels: [this.listTop5[0].nameParty, this.listTop5[1].nameParty, this.listTop5[2].nameParty
              , this.listTop5[3].nameParty, this.listTop5[4].nameParty, this.other.name],
            datasets: [{
              label: [this.listTop5[0].nameParty, this.listTop5[1].nameParty, this.listTop5[2].nameParty
              , this.listTop5[3].nameParty, this.listTop5[4].nameParty, this.other.name] ,
              // data: [200, 50, 30, 15, 20, 34],
              data: [this.listTop5[0].score, this.listTop5[1].score, this.listTop5[2].score
                , this.listTop5[3].score, this.listTop5[4].score, this.other.score],
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

  Editdata(dataScore:ScoreArea) {
    this.navCtrl.push(EditscorePage, {
      _dataScore: dataScore
    });
  }

}

