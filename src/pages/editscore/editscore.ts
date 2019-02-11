import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EditscorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editscore',
  templateUrl: 'editscore.html',
})
export class EditscorePage {
  data: any = [];
  id: any = {};
  mymodel: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, public viewCtrl: ViewController) {

    // https://electionvars.azurewebsites.net/api/ElectionV3/Edititem/Edititem?id=
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditscorePage');
    this.data = this.navParams.get('dataid');
    console.log(this.data);
    this.id = this.data.id;

  }
  submit() {
    this.http.post("https://electionvars.azurewebsites.net/api/ElectionV3/EditScore/" + this.id, {
      "score": this.mymodel.score
    }).subscribe(data => {
      this.viewCtrl.dismiss(data);
    });

  }
}
