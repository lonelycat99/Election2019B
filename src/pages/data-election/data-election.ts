import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ScoreArea, GlobalVaraible, GetScoreParty } from '../../app/model';
import { DataElectionDetailPage } from '../data-election-detail/data-election-detail';
import { EditscorePage } from '../editscore/editscore';


@IonicPage()
@Component({
  selector: 'page-data-election',
  templateUrl: 'data-election.html',
})
export class DataElectionPage {

  colorRow: string;
  listMyParty: GetScoreParty[];
  listFilter: GetScoreParty[];
  tokenid: any = {};
  namekad: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public modalCtrl: ModalController) {
    this.initializeItems();
  }

  ionViewDidEnter() {
    this.http.get<GetScoreParty[]>(GlobalVaraible.host + "GetMaxScoreAndMyScore")
      .subscribe(data => {
        this.listMyParty = data;
        this.listFilter = this.listMyParty;
        console.log(this.listMyParty);
      });
  }

  initializeItems() {
    this.listFilter = this.listMyParty;
  }

  Godetail(nameArea, idArea) {
    this.navCtrl.push(DataElectionDetailPage, {
      _nameArea: nameArea,
      _idArea: idArea
    });
  }

  Editdata(id) {
    const modal = this.modalCtrl.create(EditscorePage, {
      dataid: id
    });
    modal.present();
  }


  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listFilter = this.listMyParty.filter((item) => {
        return (item.nameArea.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

}
