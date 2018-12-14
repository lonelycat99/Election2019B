import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pet: string;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet = "t1";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaretakerPage');
  }
  

}
