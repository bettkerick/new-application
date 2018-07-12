import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  apiUrl: string = 'http://localhost:8000/api/';

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  login(credentials) {
    return new Promise((resolve, reject) => {
      
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let params = 'email='+credentials.email+'&password='+credentials.password;
        //headers.append('Content-Type', 'application/json');

        //this.http.post(this.apiUrl+'login', JSON.stringify(credentials), {headers: headers})
        this.http.post(this.apiUrl+'login', params, {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let params = 'name='+data.name+'&email='+data.email+'&password='+data.password+
        '&address='+data.address+'&phone='+data.phone+'&pin='+data.pin+
        '&latitude='+data.latitude+'&longitude='+data.longitude;

        this.http.post(this.apiUrl+'register', params, {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
  appreciation(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let params = 'id='+data.id+'&name='+data.name+'&details='+data.details+
        '&photo='+data.photo;

        this.http.post(this.apiUrl+'appreciations', params, {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }
  obituary(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let params = 'id='+data.id+'&name='+data.name+'&details='+data.details+
        '&photo='+data.photo+'&map_photo='+data.map_photo+'&eulogy_photo='+data.eulogy_photo;

        this.http.post(this.apiUrl+'orbituaries', params, {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        this.http.post(this.apiUrl+'logout', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  }  

  getuser(){
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    
    return this.http.get(this.apiUrl+'user',{headers: headers});
  }

  getRequest(){
  return this.http.get(this.apiUrl + 'appreciations/17', this.setHeaders())
  .map(res => res.json());
  }  
  setHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return {headers: headers};
  }
}
