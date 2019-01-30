import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AreaElection, DataMaxScore } from '../../app/model';
import { DataElectionDetailPage } from '../data-election-detail/data-election-detail';

@IonicPage()
@Component({
  selector: 'page-data-election',
  templateUrl: 'data-election.html',
})
export class DataElectionPage {

  colorRow: string;
  listMaxScore: DataMaxScore[];
  tokenid: any = {};
  namekad: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get<DataMaxScore[]>("http://localhost:5000/api/Election/GetMaxScoreArea")
      .subscribe(data => {
        this.listMaxScore = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataElectionPage');
  }

  ionViewDidEnter() {
    this.http.get("http://pbiebeded.azurewebsites.net/api/values/gettoken/45f95249-7ae8-4335-899b-d66de3334065/f39c1e8b-dbe1-4b5b-bf55-1a27948bee47").subscribe(
      it => {
        this.tokenid = it
        console.log("token");
        console.log(it);
      }
    );
  }

  Godetail(token, nameArea) {
    token = this.tokenid
    this.navCtrl.push("DataElectionDetailPage", {
      idtoken: token,
      kadname: nameArea
    });
  }

}
