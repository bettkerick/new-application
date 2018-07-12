webpackJsonp([5],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppreciationPageModule", function() { return AppreciationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appreciation__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppreciationPageModule = (function () {
    function AppreciationPageModule() {
    }
    AppreciationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__appreciation__["a" /* AppreciationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__appreciation__["a" /* AppreciationPage */]),
            ],
        })
    ], AppreciationPageModule);
    return AppreciationPageModule;
}());

//# sourceMappingURL=appreciation.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppreciationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(209);
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
 * Generated class for the AppreciationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppreciationPage = (function () {
    function AppreciationPage(navCtrl, navParams, imagePicker, base64, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.regData = { id: '', name: '', details: '', photo: '' };
    }
    AppreciationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AppreciationPage');
    };
    AppreciationPage.prototype.doAppre = function () {
        var _this = this;
        this.showLoader();
        this.authService.appreciation(this.regData).then(function (result) {
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
    AppreciationPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Registering...'
        });
        this.loading.present();
    };
    AppreciationPage.prototype.presentToast = function (msg) {
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
    AppreciationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-appreciation',template:/*ion-inline-start:"C:\ionics\ionic3\project\Obi_Application\src\pages\appreciation\appreciation.html"*/'<!--\n  Generated template for the AppreciationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Appreciation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	 <h2>Register Here</h2>\n  <form (submit)="doAppre()">\n    <ion-item>\n      <ion-label stacked>Name</ion-label>\n      <ion-input [(ngModel)]="regData.name" name="name" type="text" placeholder="Your name" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>details</ion-label>\n      <ion-input [(ngModel)]="regData.details" name="details" type="details" placeholder="Your details" ></ion-input>\n    </ion-item>\n\n     <ion-item>\n     <input type="file" [(ngModel)]="regData.photo" name="myImage" image-with-preview\n     ng-model="image"\n     accept="image/jpeg,image/png"\n     dimensions="height < 400 && width < 1800 && width > 2 * height">\n    <span class="error" ng-show="myForm.myImage.$error.image">\n    </span>\n    <span class="error" ng-show="myForm.myImage.$error.dimensions">\n    </span>\n    <img ng-show="image.src"/>\n    </ion-item>\n    <button ion-button block type="submit">\n      SUBMIT\n    </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\ionics\ionic3\project\Obi_Application\src\pages\appreciation\appreciation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], AppreciationPage);
    return AppreciationPage;
}());

//# sourceMappingURL=appreciation.js.map

/***/ })

});
//# sourceMappingURL=5.js.map