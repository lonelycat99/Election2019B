import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
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
    public alertController: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadFilePage');
  }

  onSubmit() {
    //http://localhost:5000/api/ElectionV3/UploadFile
    // https://electionvars.azurewebsites.net/api/ElectionV3/UploadFile
    // GlobalVaraible.host + "UploadFile"
    console.log("1");
    const loader = this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 120000,
      dismissOnPageChange: true
    })
    loader.present();

    this.http.post(GlobalVaraible.host + "UploadFile", this.formData).subscribe(data => {
      console.log("2");
      const confirm = this.alertController.create({
        title: 'อัปโหลดคะแนนสำเร็จ',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              loader.present();
              console.log("done");

            }
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
