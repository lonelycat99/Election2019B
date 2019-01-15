import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LocationCodeModel } from '../../app/model';

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

  listArea: LocationCodeModel[];
  colorRow: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get<LocationCodeModel[]>("http://localhost:5000/api/Election/GetAllLocationCode")
      .subscribe(data => {
        this.listArea = data;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataElectionPage');
  }

  ionViewDidEnter() {

  }

}
