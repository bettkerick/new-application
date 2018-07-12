import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ObituaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obituary',
  templateUrl: 'obituary.html',
})
export class ObituaryPage {

 constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObituaryPage');
  }

  loading: any;
  regData = { id:'', name:'', date_of_burial:'', details:'', photo:'', map_photo:'', eulogy_photo:''};
  data: any;

  doObi(){
    this.showLoader();
    this.authService.obituary(this.regData).then((result) => {
      this.loading.dismiss();
      //this.navCtrl.pop();
      this.data = result;
      if (this.data.status=='ok'){
        this.presentToast('Register successful');  
      } else {
        this.presentToast(this.data.message);  
      }
      
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }
  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Registering...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


}
