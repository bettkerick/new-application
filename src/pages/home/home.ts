import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { NavController, ModalController, Events, IonicPage } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage {

  result:any=[];
  data: Observable<any>;
  constructor(
  	public navCtrl: NavController,
  	public modalCtrl: ModalController,
    public storage: Storage,
    public events: Events,
     public http: HttpClient,
     public authService: AuthServiceProvider) {


  }

  getData(){
  //var url="http://localhost:8000/api/appreciations/17"
    //this.authService.getRequest().subscribe(data => {
     this.data=this.authService.getRequest();
    //this.data=this.http.get(url);
     this.data.subscribe(data=>{
     this.result=data;
     }); 
      //this.getresult = data;
      //console.log(this.getVariable);
   // });
  }

}
