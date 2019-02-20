import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PartyScore, GlobalVaraible, ScoreOther } from '../../app/model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listScoreAll: PartyScore[];
  listScore: PartyScore[] = [];
  listShowScore: PartyScore[] = [];
  listScoreOther: PartyScore[] = [];
  otherScore: ScoreOther = new ScoreOther;
  checkShowMoreParty: boolean = false
  listfilter: PartyScore[];

  constructor(public navCtrl: NavController, public http: HttpClient, public alertController: AlertController) {

  }
  ionViewDidEnter() {
    // "http://localhost:5000/api/ElectionV3/UploadFile"
    // GlobalVaraible.host + "GetAllPartyScore"
    this.listShowScore = [];
    this.listScoreAll = [];
    this.listfilter = [];
    this.listScore = [];
    this.http.post(GlobalVaraible.host + "UpdatePartyScore", null)
      .subscribe(data => {
        this.http.get<PartyScore[]>(GlobalVaraible.host + "GetAllPartyScore")
          .subscribe(data => {
            this.listScoreAll = data;
            this.listfilter = this.listScoreAll;
            this.listScoreAll.forEach(data => {
              data.isChecked = true;
              this.listScore.push(data);
            });
            this.listShowScore = this.listScore;
            this.otherScore = { score: 0, scoreArea: 0, scorePartyList: 0, scorePercent: 0, isChecked: true, status: true };
            console.log(this.listScore);
          });
        this.listfilter = this.listScoreAll;
      });
  }

  ShowMoreParty() {
    if (this.checkShowMoreParty == false) {
      this.checkShowMoreParty = true
    } else {
      this.checkShowMoreParty = false
    }
  }

  checkFilter() {
    this.listShowScore = this.listScore.filter(it => it.isChecked);
    this.listScoreOther = this.listScore.filter(it => !it.isChecked);
    if (this.listScoreOther != []) {
      this.otherScore = { score: 0, scoreArea: 0, scorePartyList: 0, scorePercent: 0, isChecked: true, status: true };
      this.listScoreOther.forEach(data => {
        this.otherScore.score += data.haveScore;
        this.otherScore.scoreArea += data.areaScore;
        this.otherScore.scorePartyList += data.nameListScore;
        this.otherScore.scorePercent += data.percentScore;
      });
    }
    else {
      this.otherScore.status = false;
    }
  }

  SendResultScore() {
    this.http.post(GlobalVaraible.host + "UpdateTable2", null)
      .subscribe(data => {
        this.http.post(GlobalVaraible.host + "UpdateScorePartyApp1", null)
          .subscribe(data => {
          });
        const confirm = this.alertController.create({
          title: 'ส่งผลประเมิณสำเร็จ',
          buttons: [
            {
              text: 'OK',
              handler: () => { }
            }
          ]
        });
        confirm.present();
      });

  }

  showScoreAreaOfParty(idPart: string) {
    this.navCtrl.push("KaddetailPage", { _idParty: idPart });
  }

  showScorePartyListOfParty() {
    this.navCtrl.push("PartylistdetailPage");
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.listfilter = this.listScoreAll;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listfilter = this.listScoreAll.filter((item) => {
        return (item.partyName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
