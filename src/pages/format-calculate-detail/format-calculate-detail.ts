import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ScorePoll, GlobalVaraible } from '../../app/model';

/**
 * Generated class for the FormatCalculateDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-format-calculate-detail',
  templateUrl: 'format-calculate-detail.html',
})
export class FormatCalculateDetailPage {

  idArea: string;
  listScorePoll: ScorePoll[];
  nameArea: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http: HttpClient) {
    this.idArea = this.navParams.get('_idArea');
    this.nameArea = this.navParams.get('_nameArea');
    console.log(this.idArea);
    console.log(this.nameArea);
    this.http.get<ScorePoll[]>(GlobalVaraible.host + "GetAreaScorePoll/" + this.idArea)
      .subscribe(data => {
        this.listScorePoll = data;
        this.listScorePoll.forEach(data => {
          this.nameArea = data.nameArea
        });
        console.log(this.listScorePoll);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormatCalculateDetailPage');
  }
  createparty() {
    const modal = this.modalCtrl.create("CreatepartyPage");
    modal.present();
  }

}
