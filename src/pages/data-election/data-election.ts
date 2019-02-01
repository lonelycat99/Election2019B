import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DataMaxScore } from '../../app/model';
import { DataElectionDetailPage } from '../data-election-detail/data-election-detail';
import { EditscorePage } from '../editscore/editscore';


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
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,public modalCtrl: ModalController) {
    this.http.get<DataMaxScore[]>("https://electionvars.azurewebsites.net/api/Election/GetMaxScoreArea")
      .subscribe(data => {
        this.listMaxScore = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataElectionPage');
  }

  ionViewDidEnter() {
    this.http.get("http://pbiebeded.azurewebsites.net/api/values/gettoken/50ffda63-4985-4fdf-b052-c78cee9263ff/00308657-8890-471b-83c7-14169c8d8d3f").subscribe(
      it => {
        this.tokenid = it
        console.log("token");
        console.log(it);
      }
    );
  }

  Godetail(token, nameArea) {
    token = this.tokenid
    this.navCtrl.push(DataElectionDetailPage, {
      idtoken: token,
      kadname: nameArea
    });
  }

  Editdata(id) {
    const modal = this.modalCtrl.create(EditscorePage,{
      dataid:id
    });
    modal.present();
    // this.navCtrl.push(EditscorePage,{
    //   dataid:id
    // });
  }

}
