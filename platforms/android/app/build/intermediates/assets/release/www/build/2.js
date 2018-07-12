webpackJsonp([2],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObituaryPageModule", function() { return ObituaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obituary__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ObituaryPageModule = (function () {
    function ObituaryPageModule() {
    }
    ObituaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__obituary__["a" /* ObituaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__obituary__["a" /* ObituaryPage */]),
            ],
        })
    ], ObituaryPageModule);
    return ObituaryPageModule;
}());

//# sourceMappingURL=obituary.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObituaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ObituaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ObituaryPage = (function () {
    function ObituaryPage(navCtrl, navParams, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.regData = { id: '', name: '', date_of_burial: '', details: '', photo: '', map_photo: '', eulogy_photo: '' };
    }
    ObituaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ObituaryPage');
    };
    ObituaryPage.prototype.doObi = function () {
        var _this = this;
        this.showLoader();
        this.authService.obituary(this.regData).then(function (result) {
            _this.loading.dismiss();
            //this.navCtrl.pop();
            _this.data = result;
            if (_this.data.status == 'ok') {
                _this.presentToast('Register successful');
            }
            else {
                _this.presentToast(_this.data.message);
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    ObituaryPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Registering...'
        });
        this.loading.present();
    };
    ObituaryPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ObituaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-obituary',template:/*ion-inline-start:"C:\ionics\ionic3\project\Obi_Application\src\pages\obituary\obituary.html"*/'<!--\n  Generated template for the ObituaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Obituary</ion-title>\n\n	</ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n	\n    <form (submit)="doObi()">\n     <ion-item>\n                <ion-label color="primary" floating>Name(<span class="red">*</span>)</ion-label>\n                <ion-input   [(ngModel)]="regData.name" name="name" type="text"></ion-input>\n                </ion-item>\n                <ion-item>\n                <ion-label color="primary" floating>Date of Burial</ion-label>\n                <ion-datetime  [(ngModel)]="regData.date" name="date_of_burial" displayFormat="MM/DD/YYYY" ></ion-datetime>\n                </ion-item>\n                <ion-item>\n                <ion-label color="primary" floating>Details</ion-label><br>\n                <ion-textarea  [(ngModel)]="regData.details" name="details" placeholder=" "></ion-textarea>\n                </ion-item>\n                <ion-item>\n                 <input type="file" [(ngModel)]="regData.photo" name="myImage" image-with-preview\n                 ng-model="image"\n                 accept="image/jpeg,image/png"\n                 dimensions="height < 400 && width < 1800 && width > 2 * height">\n                <span class="error" ng-show="myForm.myImage.$error.image">\n                </span>\n                <span class="error" ng-show="myForm.myImage.$error.dimensions">\n                </span>\n                <img ng-show="image.src"/>\n                </ion-item>\n                 <ion-item>\n                 <input type="file" [(ngModel)]="regData.map_photo" name="myImage" image-with-preview\n                 ng-model="image"\n                 accept="image/jpeg,image/png"\n                 dimensions="height < 400 && width < 1800 && width > 2 * height">\n                <span class="error" ng-show="myForm.myImage.$error.image">\n                </span>\n                <span class="error" ng-show="myForm.myImage.$error.dimensions">\n                </span>\n                <img ng-show="image.src"/>\n                </ion-item>\n                 <ion-item>\n                 <input type="file" [(ngModel)]="regData.eulogy_photo" name="myImage" image-with-preview\n                 ng-model="image"\n                 accept="image/jpeg,image/png"\n                 dimensions="height < 400 && width < 1800 && width > 2 * height">\n                <span class="error" ng-show="myForm.myImage.$error.image">\n                </span>\n                <span class="error" ng-show="myForm.myImage.$error.dimensions">\n                </span>\n                <img ng-show="image.src"/>\n                </ion-item>\n                \n                <button ion-button block type="submit">\n                SUBMIT\n                </button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\ionics\ionic3\project\Obi_Application\src\pages\obituary\obituary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ObituaryPage);
    return ObituaryPage;
}());

//# sourceMappingURL=obituary.js.map

/***/ })

});
//# sourceMappingURL=2.js.map