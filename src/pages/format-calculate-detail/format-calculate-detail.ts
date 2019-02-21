import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ScorePoll, GlobalVaraible, otherScore } from '../../app/model';

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

  idArea: string;
  listScorePoll: ScorePoll[];
  listScorePollOther: ScorePoll[] = [];
  listScorePoll2: ScorePoll[] = [];
  nameArea: string;
  percen: any;
  percenOther: any;
  other: otherScore = new otherScore;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http: HttpClient) {
    this.idArea = this.navParams.get('_idArea');
    this.nameArea = this.navParams.get('_nameArea');
    console.log(this.idArea);
    console.log(this.nameArea);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormatCalculateDetailPage');
  }

  ionViewDidEnter() {
    this.http.get<ScorePoll[]>(GlobalVaraible.host + "GetAreaScorePoll/" + this.idArea)
      .subscribe(data => {
        this.listScorePoll = data
        this.listScorePoll.forEach(data => {
          this.nameArea = data.nameArea
          this.percen = data.percentScore.toFixed(2);
          this.listScorePoll2.push({
            id: data.id, idParty: data.idParty, idArea: data.idArea,
            nameArea: data.nameArea, nameParty: data.nameParty, datePoll: data.datePoll, score: data.score,
            percentScore: this.percen, source: data.source, targetScore: data.targetScore,
            targetScoreDefault: data.targetScoreDefault
          })
        });
        let count = 0;
        this.listScorePoll2.forEach(data => {
          if (count > 5) {
            this.listScorePollOther.push(data);
          }
          count += 1;
        });
        this.other = { name: "อื่นๆ", score: 0 };
        this.listScorePollOther.forEach(data => {
          this.other.score += Number(data.percentScore);
        });
        console.log(this.other);
        console.log(this.listScorePoll2);
      });
  }
  createparty() {
    const modal = this.modalCtrl.create("CreatepartyPage");
    modal.present();
  }
}
