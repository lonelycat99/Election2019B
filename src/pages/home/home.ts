import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { testArea } from '../../app/models';
import { devModeEqual } from '@angular/core/src/change_detection/change_detection';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  election: string;
  listArea: testArea[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.election = "totalScore";

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
    console.log('ionViewDidLoad CaretakerPage');
  }

  getItems(event: Event) {

  }

  showDetailArea(index: number) {
    if (this.listArea[index].status == false) {
      this.listArea[index].status = true;
    }
    else {
      this.listArea[index].status = false;
    }
  }


}
