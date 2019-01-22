import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PartyScore } from '../../app/model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listScore: PartyScore[];
  constructor(public navCtrl: NavController, public http: HttpClient) {

    this.http.get<PartyScore[]>("http://localhost:5000/api/Election/GetAllParty")
      .subscribe(data => {
        this.listScore = data;
        console.log( this.listScore);
      });
  }



  // openPage() {

  // }

}
