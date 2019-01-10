import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { testArea } from '../../app/model';
import { FormatCalculateDetailPage } from '../format-calculate-detail/format-calculate-detail';

/**
 * Generated class for the FormatCalculatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-format-calculate',
  templateUrl: 'format-calculate.html',
})
export class FormatCalculatePage {

  listArea: testArea[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listArea = [
      {
        "nameArea": " กทม เขต.1",
        "subArea": [
          "เขต 1 พระนคร",
          "เขต 2 เขตประทุม",
          "เขต 3 บางคอแหลม",
          "เขต 4 คลองเตย",
          "เขต 5 พระนคร"
        ],
        "status": false
      }, {
        "nameArea": " กทม เขต.2", "subArea": [
          "เขต 1 พระนคร",
          "เขต 2 เขตประทุม",
          "เขต 3 บางคอแหลม",
          "เขต 4 คลองเตย",
          "เขต 5 พระนคร"
        ],
        "status": false
      },
      {
        "nameArea": " กทม เขต.3", "subArea": [
          "เขต 1 พระนคร",
          "เขต 2 เขตประทุม",
          "เขต 3 บางคอแหลม",
          "เขต 4 คลองเตย",
          "เขต 5 พระนคร"
        ],
        "status": false
      },
      {
        "nameArea": " กทม เขต.4",
        "subArea": [
          "เขต 1 พระนคร",
          "เขต 2 เขตประทุม",
          "เขต 3 บางคอแหลม",
          "เขต 4 คลองเตย",
          "เขต 5 พระนคร"
        ],
        "status": false
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormatCalculatePage');
  }

  showDetailArea(index: number) {
    if (this.listArea[index].status == false) {
      this.listArea[index].status = true;
    }
    else {
      this.listArea[index].status = false;
    }
  }

  GoCalculate() {
    this.navCtrl.push(FormatCalculateDetailPage)
  }

}
