import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ScoreArea } from '../../app/model';
import { DataElectionDetailPage } from '../data-election-detail/data-election-detail';
import { EditscorePage } from '../editscore/editscore';


@IonicPage()
@Component({
  selector: 'page-data-election',
  templateUrl: 'data-election.html',
})
export class DataElectionPage {

  colorRow: string;
  listMaxScore: ScoreArea[];
  items: ScoreArea[];
  tokenid: any = {};
  namekad: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public modalCtrl: ModalController) {
    this.http.get<ScoreArea[]>("https://electionvars.azurewebsites.net/api/ElectionV2/GetMaxScoreArea")
      .subscribe(data => {
        this.items = data;
        this.listMaxScore = this.items;
      });
    this.http.get("http://pbiebeded.azurewebsites.net/api/values/gettoken/50ffda63-4985-4fdf-b052-c78cee9263ff/00308657-8890-471b-83c7-14169c8d8d3f").subscribe(
      it => {
        this.tokenid = it
      }
    );

    this.listMaxScore = this.items;
    this.initializeItems();
  }


  initializeItems() {
    this.listMaxScore = this.items;
  }

  Godetail(token, nameArea,idArea) {
    token = this.tokenid
    this.navCtrl.push(DataElectionDetailPage, {
      idtoken: token,
      kadname: nameArea,
      idarea:idArea
    });
  }

  Editdata(id) {
    const modal = this.modalCtrl.create(EditscorePage, {
      dataid: id
    });
    modal.present();
    // this.navCtrl.push(EditscorePage,{
    //   dataid:id
    // });
  }


  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listMaxScore = this.items.filter((item) => {
        return (item.nameArea.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

}
