import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PartyScore, FilterArea, GlobalVaraible } from '../../app/model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listScoreAll: PartyScore[];
  listScore: PartyScore[];
  listFilter: FilterArea[] = [];

  constructor(public navCtrl: NavController, public http: HttpClient) {

    this.http.get<PartyScore[]>(GlobalVaraible.host + "GetAllPartyScore")
      .subscribe(data => {
        this.listScoreAll = data;
        this.listScore = this.listScoreAll;
        this.listScoreAll.forEach(data => {
          this.listFilter.push({ name: data.partyName, isChecked: false })
        });
        console.log(this.listScore);
      });
  }

  checkFilter() {
    this.listScore = [];
    var checkFilter = this.listFilter.every(it => it.isChecked == false);
    if (checkFilter) {
      this.listScore = this.listScoreAll;
    }
    else {
      this.listFilter.forEach(data => {
        if (data.isChecked == true) {
          let party = this.listScoreAll.find(it => it.partyName == data.name);
          this.listScore.push(party);
        }
      });
    }
  }

  showScoreAreaOfParty(idPart: string) {
    this.navCtrl.push("KaddetailPage", { _idParty: idPart });
  }

  showScorePartyListOfParty() {
    this.navCtrl.push("PartylistdetailPage");
  }

}
