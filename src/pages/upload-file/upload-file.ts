import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { GlobalVaraible } from '../../app/model';

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

  formData: FormData;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient,
    public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadFilePage');
  }

  onSubmit() {
    //http://localhost:49598/api/ElectionV3/File
    this.http.post("http://localhost:5000/api/ElectionV3/UploadFile", this.formData).subscribe(data => {
      const confirm = this.alertController.create({
        title: 'อัปโหลดคะแนนสำเร็จ',
        buttons: [
          {
            text: 'OK',
            handler: () => { }
          }
        ]
      });
      confirm.present();
    });
  }

  setFile(event) {
    let files = event.srcElement.files
    if (files) {
      this.formData = new FormData()
      for (let i = 0; i < files.length; i++) {
        this.formData.append(i.toString(), files[i], files[i].name);
      }
    }
  }
}
