import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController,
    private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  loading: any;
  regData = { name:'', email:'', password:'', address:'', phone:0, idno:0, pin:0, latitude:0,longitude:0 };
  data: any;

  doSignup() {
    this.showLoader();
    this.geolocation.getCurrentPosition().then((resp) => {
      this.regData.latitude = resp.coords.latitude;
      console.log('latitude: ', resp.coords.latitude);
      this.regData.longitude = resp.coords.longitude;
      console.log('longitude: ', resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    this.authService.register(this.regData).then((result) => {
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
