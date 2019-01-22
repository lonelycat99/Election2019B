import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AreaElection } from '../../app/model';

/**
 * Generated class for the DataElectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-election',
  templateUrl: 'data-election.html',
})
export class DataElectionPage {

  colorRow: string;
  listMaxScore: AreaElection[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get<AreaElection[]>("http://localhost:5000/api/Election/GetMaxAreaElection")
      .subscribe(data => {
        this.listMaxScore = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataElectionPage');
  }

  ionViewDidEnter() {

  }

}
