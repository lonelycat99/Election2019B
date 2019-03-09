import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ScoreArea, GlobalVaraible } from '../../app/model';

/**
 * Generated class for the EditscorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editscore',
  templateUrl: 'editscore.html',
})
export class EditscorePage {
  getScoreParty: ScoreArea = new ScoreArea;
  newScore: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, public viewCtrl: ViewController
    , public loadingCtrl: LoadingController) {

    // https://electionvars.azurewebsites.net/api/ElectionV3/Edititem/Edititem?id=
  }

  ionViewDidEnter() {
    this.getScoreParty = this.navParams.get('_dataScore');
    console.log(this.getScoreParty);
  }
  submit() {
    const loader = this.loadingCtrl.create({
      content: 'กรุณารอสักครู่ กำลังตั้งค่าคะแนนใหม่...',
      duration: 300000,
      dismissOnPageChange: true
    })
    loader.present();
    this.http.post(GlobalVaraible.host + "EditScore/" + this.newScore, this.getScoreParty)
      .subscribe(data => {
        loader.dismiss();
        this.viewCtrl.dismiss(data);
      });
  }
}
