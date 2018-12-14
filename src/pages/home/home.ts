import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  election: string;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.election = "totalScore";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaretakerPage');
  }
  

}
