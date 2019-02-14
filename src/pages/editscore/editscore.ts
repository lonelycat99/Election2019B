import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, public viewCtrl: ViewController) {

    // https://electionvars.azurewebsites.net/api/ElectionV3/Edititem/Edititem?id=
  }

  ionViewDidEnter() {
    this.getScoreParty = this.navParams.get('_dataScore');
    console.log(this.getScoreParty);
  }
  submit() {
    // "https://electionvars.azurewebsites.net/api/ElectionV3/GetAllAreaMaxScore"
    // "http://localhost:5000/api/ElectionV3/EditScore/"
    // GlobalVaraible.host + "EditScore/"
    this.http.post(GlobalVaraible.host + "EditScore/" + this.newScore, this.getScoreParty)
      .subscribe(data => {
        this.viewCtrl.dismiss(data);
      });

  }
}
