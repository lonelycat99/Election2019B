import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PartyScore, FilterArea, GlobalVaraible, ScoreOther } from '../../app/model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listScoreAll: PartyScore[];
  listScore: PartyScore[] = [];
  listScoreOther: PartyScore[] = [];
  otherScore: ScoreOther = new ScoreOther;
  checkShowMoreParty: boolean = false

  constructor(public navCtrl: NavController, public http: HttpClient) {

    this.http.get<PartyScore[]>(GlobalVaraible.host + "GetAllPartyScore")
      .subscribe(data => {
        this.listScoreAll = data;
        this.listScoreAll.forEach(data => {
          data.isChecked = true;
          this.listScore.push(data);
        });
        this.otherScore = { score: 0, scoreArea: 0, scorePartyList: 0, scorePercent: 0, isChecked: true };
        console.log(this.listScore);
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
    this.listScore = this.listScore.filter(it => it.isChecked);
    this.listScoreOther = this.listScore.filter(it => !it.isChecked);
    let t = this.listScore.filter(it => it.isChecked == true)
    this.otherScore = { score: 0, scoreArea: 0, scorePartyList: 0, scorePercent: 0, isChecked: true };
    this.listScoreOther.forEach(data => {
      this.otherScore.score += data.totalScore;
      this.otherScore.scoreArea += data.areaScore;
      this.otherScore.scorePartyList += data.nameListScore;
      this.otherScore.scorePercent += data.percentScore;
    });
  }

  showScoreAreaOfParty(idPart: string) {
    this.navCtrl.push("KaddetailPage", { _idParty: idPart });
  }

  showScorePartyListOfParty() {
    this.navCtrl.push("PartylistdetailPage");
  }

}
