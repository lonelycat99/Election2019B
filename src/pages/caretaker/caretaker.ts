import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CaretakerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-caretaker',
  templateUrl: 'caretaker.html',
  
})
export class CaretakerPage {
  pet: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet = "t1";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaretakerPage');
  }
  

}
