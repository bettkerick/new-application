webpackJsonp([3],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemorialPageModule", function() { return MemorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memorial__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MemorialPageModule = (function () {
    function MemorialPageModule() {
    }
    MemorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__memorial__["a" /* MemorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__memorial__["a" /* MemorialPage */]),
            ],
        })
    ], MemorialPageModule);
    return MemorialPageModule;
}());

//# sourceMappingURL=memorial.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
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
 * Generated class for the MemorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemorialPage = (function () {
    function MemorialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MemorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemorialPage');
    };
    MemorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memorial',template:/*ion-inline-start:"C:\ionics\ionic3\project\Obi_Application\src\pages\memorial\memorial.html"*/'<!--\n  Generated template for the MemorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Memorials\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-item>\n                <ion-label color="primary" floating>Name(<span class="red">*</span>)</ion-label>\n                <ion-input class="txt" type="text"></ion-input>\n                </ion-item>\n                <ion-item>\n                <ion-label color="primary" floating>Date of Death</ion-label>\n                <ion-datetime  class="txt" displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label color="primary" floating>Details</ion-label><br>\n                <ion-textarea  class="txt" placeholder=" "></ion-textarea>\n                </ion-item>\n                <ion-item>\n                 <ion-label color="primary" stacked>Upload the Image</ion-label>\n                 </ion-item>\n                 <ion-item>  \n                  <input type="file" name="myImage" image-with-preview\n                     ng-model="image"\n                     accept="image/jpeg,image/png"\n                     dimensions="height < 400 && width < 1800 && width > 2 * height">\n                    <span class="error" ng-show="myForm.myImage.$error.image">\n                    </span>\n                    <span class="error" ng-show="myForm.myImage.$error.dimensions">\n                    </span>\n                    <img ng-show="image.src"/>\n                    </ion-item>\n                   \n\n                <div class="button">\n                 <button ion-button  [color]="myColor2" (click)="login()" [outline]="isOutline" [round]="isRound">\n                  Submit\n                </button></div>\n\n</ion-content>\n'/*ion-inline-end:"C:\ionics\ionic3\project\Obi_Application\src\pages\memorial\memorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MemorialPage);
    return MemorialPage;
}());

//# sourceMappingURL=memorial.js.map

/***/ })

});
//# sourceMappingURL=3.js.map