import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScoreArea, GlobalVaraible } from '../../app/model';
import { FormatCalculateDetailPage } from '../format-calculate-detail/format-calculate-detail';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the FormatCalculatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-format-calculate',
  templateUrl: 'format-calculate.html',
})
export class FormatCalculatePage {

  listArea: ScoreArea[];
  listfilter: ScoreArea[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get<ScoreArea[]>(GlobalVaraible.host + "GetAllArea")
      .subscribe(data => {
        this.listArea = data;
        this.listfilter = this.listArea;
        console.log(this.listArea);
      });
    this.listfilter = this.listArea;
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormatCalculatePage');
  }

  ionViewDidEnter() {
    console.log("Enter IonDidViewEnter");

  }

  GoCalculate(idArea: string, namearea) {
    this.navCtrl.push(FormatCalculateDetailPage, { _idArea: idArea, _nameArea: namearea })
  }

  initializeItems() {
    this.listfilter = this.listArea;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.listfilter = this.listArea.filter((item) => {
        return (item.nameArea.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
