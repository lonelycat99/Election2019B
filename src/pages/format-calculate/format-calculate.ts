import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AreaData, ScoreArea, GlobalVaraible } from '../../app/model';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get<ScoreArea[]>(GlobalVaraible.host+"GetAllArea")
      .subscribe(data => {
        this.listArea = data;
        console.log(this.listArea);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormatCalculatePage');
  }

  ionViewDidEnter() {
    console.log("Enter IonDidViewEnter");

  }

  GoCalculate(idArea: string) {
    this.navCtrl.push(FormatCalculateDetailPage, { _idArea: idArea })
  }
}
