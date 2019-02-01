import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the UploadFilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-file',
  templateUrl: 'upload-file.html',
})
export class UploadFilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadFilePage');
  }

  showAlert() {
    const confirm = this.alertController.create({
      title: 'อัปโหลดคะแนนสำเร็จ',
      buttons: [
        {
          text: 'OK',
          handler: () => {}
        }
      ]
    });
    confirm.present();
  }
}
