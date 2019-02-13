import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVaraible, ScoreArea } from '../../app/model';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the KaddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kaddetail',
  templateUrl: 'kaddetail.html',
})
export class KaddetailPage {

  listScoreAreaOfParty: ScoreArea[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    var idParty = this.navParams.get('_idParty');
    console.log(idParty);

    this.http.get<ScoreArea[]>(GlobalVaraible.host + "GetAreaWinScoreParty/" + idParty)
      .subscribe(data => {
        this.listScoreAreaOfParty = data;
        console.log(this.listScoreAreaOfParty);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KaddetailPage');
  }

}
