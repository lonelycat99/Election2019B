import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.get('data');
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormatCalculateDetailPage');
  }
  createparty() {
    this.navCtrl.push("CreatepartyPage");
  }

}
