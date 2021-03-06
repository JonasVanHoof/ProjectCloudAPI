(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./interfacePlace.ts":
/*!***************************!*\
  !*** ./interfacePlace.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var interfacePlace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! interfacePlace */ "./interfacePlace.ts");
/* harmony import */ var interfacePlace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(interfacePlace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keys */ "./src/app/keys.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");






var ApiService = /** @class */ (function () {
    function ApiService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.longtitude = 51.23;
        this.latitude = 4.41;
        this.radius = 3000;
        this.baseLink = 'https://api.foursquare.com/v2/';
        console.log('api init');
        this.keys = new _keys__WEBPACK_IMPORTED_MODULE_4__["Keys"]();
        this.client_id = this.keys.client_id;
        this.client_secret = this.keys.client_secret;
    }
    ApiService.prototype.getplaces = function () {
        return this.http.get(this.baseLink + 'venues/search?ll=' + this.longtitude + ',' + this.latitude + '&client_id=' + this.client_id + '&client_secret=' + this.client_secret + '&v=20190321');
    };
    ApiService.prototype.gettrending = function () {
        return this.http.get(this.baseLink + 'venues/trending?ll=' + this.longtitude + ',' + this.latitude + '&radius=' + this.radius + '&client_id=' + this.client_id + '&client_secret=' + this.client_secret + '&v=20190321');
    };
    ApiService.prototype.searchVenue = function (word) {
        return this.http.get(this.baseLink + 'venues/search?&query=' + word + '&ll=' + this.longtitude + ',' + this.latitude + '&radius=99999999&client_id=' + this.client_id + '&client_secret=' + this.client_secret + '&v=20190321');
    };
    ApiService.prototype.getCircusMaterials = function () {
        return this.http.get('https://api.jonasvanhoof.me/Circus_material');
    };
    // , {
    //   headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.accessToken}`)
    // }
    ApiService.prototype.postCircusMaterial = function (material) {
        return this.http.post('https://api.jonasvanhoof.me/Circus_material', material);
    };
    ApiService.prototype.searchMaterial = function (id) {
        return this.http.get('https://api.jonasvanhoof.me/Circus_material/id=' + id);
    };
    ApiService.prototype.deleteMaterial = function (id) {
        return this.http.delete('https://api.jonasvanhoof.me/Circus_material/id=' + id);
    };
    ApiService.prototype.putMaterial = function (material) {
        return this.http.put('https://api.jonasvanhoof.me/Circus_material', material);
    };
    ApiService.prototype.getOwners = function () {
        return this.http.get('https://api.jonasvanhoof.me/Owners');
    };
    ApiService.prototype.getByID = function (id) {
        return this.http.get(this.baseLink + 'venues/' + id + '?&client_id=' + this.client_id + '&client_secret=' + this.client_secret + '&v=20190321');
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/search-page/search-page.component.ts");
/* harmony import */ var _trending_page_trending_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trending-page/trending-page.component */ "./src/app/trending-page/trending-page.component.ts");
/* harmony import */ var _places_page_places_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./places-page/places-page.component */ "./src/app/places-page/places-page.component.ts");
/* harmony import */ var _circusmaterials_circusmaterials_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circusmaterials/circusmaterials.component */ "./src/app/circusmaterials/circusmaterials.component.ts");







var routes = [
    { path: 'search', component: _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__["SearchPageComponent"] },
    { path: 'trending', component: _trending_page_trending_page_component__WEBPACK_IMPORTED_MODULE_4__["TrendingPageComponent"] },
    { path: 'places', component: _places_page_places_page_component__WEBPACK_IMPORTED_MODULE_5__["PlacesPageComponent"] },
    { path: 'circusMaterials', component: _circusmaterials_circusmaterials_component__WEBPACK_IMPORTED_MODULE_6__["CircusmaterialsComponent"] },
    { path: '**', component: _trending_page_trending_page_component__WEBPACK_IMPORTED_MODULE_4__["TrendingPageComponent"] },
];
// , canActivate: [AuthGuard]
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'projectCloudAPI';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _trending_page_trending_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trending-page/trending-page.component */ "./src/app/trending-page/trending-page.component.ts");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/search-page/search-page.component.ts");
/* harmony import */ var _places_page_places_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./places-page/places-page.component */ "./src/app/places-page/places-page.component.ts");
/* harmony import */ var _circusmaterials_circusmaterials_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./circusmaterials/circusmaterials.component */ "./src/app/circusmaterials/circusmaterials.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _trending_page_trending_page_component__WEBPACK_IMPORTED_MODULE_8__["TrendingPageComponent"],
                _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_9__["SearchPageComponent"],
                _places_page_places_page_component__WEBPACK_IMPORTED_MODULE_10__["PlacesPageComponent"],
                _circusmaterials_circusmaterials_component__WEBPACK_IMPORTED_MODULE_11__["CircusmaterialsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.isLoggedIn) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





window.global = window;
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        // Create Auth0 web auth instance
        this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_2__["WebAuth"]({
            clientID: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auth.clientID,
            domain: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auth.domain,
            responseType: 'token',
            redirectUri: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auth.redirect,
            audience: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auth.audience,
            scope: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auth.scope
        });
        this.getAccessToken();
    }
    AuthService.prototype.login = function () {
        // Auth0 authorize request
        this.auth0.authorize();
        console.log('login');
    };
    AuthService.prototype.handleLoginCallback = function () {
        var _this = this;
        // When Auth0 hash parsed, get profile
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken) {
                window.location.hash = '';
                _this.getUserInfo(authResult);
            }
            else if (err) {
                console.error("Error: " + err.error);
            }
            _this.router.navigate(['/trending']);
        });
    };
    AuthService.prototype.getAccessToken = function () {
        var _this = this;
        this.auth0.checkSession({}, function (err, authResult) {
            if (authResult && authResult.accessToken) {
                _this.getUserInfo(authResult);
                console.log('get access token');
            }
        });
    };
    AuthService.prototype.getUserInfo = function (authResult) {
        var _this = this;
        // Use access token to retrieve user's profile and set session
        this.auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            if (profile) {
                _this._setSession(authResult, profile);
            }
        });
    };
    AuthService.prototype._setSession = function (authResult, profile) {
        // Save authentication data and update login status subject
        this.expiresAt = authResult.expiresIn * 1000 + Date.now();
        this.accessToken = authResult.accessToken;
        this.userProfile = profile;
        this.authenticated = true;
    };
    AuthService.prototype.logout = function () {
        // Log out of Auth0 session
        // Ensure that returnTo URL is specified in Auth0
        // Application settings for Allowed Logout URLs
        this.auth0.logout({
            returnTo: 'https://jonasvanhoof.me/trending',
            clientID: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].auth.clientID
        });
        console.log('logout');
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return Date.now() < this.expiresAt && this.authenticated;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/circusmaterials/circusmaterials.component.html":
/*!****************************************************************!*\
  !*** ./src/app/circusmaterials/circusmaterials.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div>\n      <input #search type=\"text\" placeholder=\"search id\">\n      <button id=\"searchbutton\" (click)='searchMaterial()'>search</button>\n\n      <ul>\n        <div>\n          <li><strong>Material ID: </strong>{{materialSearched.id}}</li>\n          <li><strong>Material name: </strong>{{materialSearched.name}}</li>\n          <li id=\"inputName\" *ngIf=\"editOn\" ><input type=\"text\"> <button>change</button></li>\n          <li><strong>Amount: </strong>{{materialSearched.amount}}</li>\n          <li><strong>Category: </strong>{{materialSearched.category}}</li>\n          <li><strong>Brand: </strong>{{materialSearched.brand}}</li>\n          <li><strong>Day of purchase : </strong>{{materialSearched.in_use_date | date:'fullDate'}}</li>\n          <button (click)=deleteMaterial() >Delete</button>\n          <button id=\"editBtn\" (click)=\"editOn = true\" >Edit</button>\n        </div>\n      </ul>\n\n      <ul *ngFor=\"let material of materials\">\n        <div>\n          <li><strong>Material name: </strong>{{material.name}}</li>\n          <li><strong>Amount: </strong>{{material.amount}}</li>\n          <li><strong>Category: </strong>{{material.category}}</li>\n          <li><strong>Brand: </strong>{{material.brand}}</li>\n          <li><strong>Day of purchase : </strong>{{material.in_use_date | date:'fullDate'}}</li>\n        </div>\n      </ul>\n  </div>\n\n  <div>\n      <strong>Add material to the list:</strong>\n      <form>\n        <div>\n            <input [(ngModel)]=\"materialpost.name\" type=\"text\" placeholder=\"name\" required>\n            <input [(ngModel)]=\"materialpost.amount\" type=\"number\" placeholder=\"amount\" required>\n        </div>\n        <div>\n            <input [(ngModel)]=\"materialpost.category\" type=\"text\" placeholder=\"category\" required>\n            <input [(ngModel)]=\"materialpost.brand\" type=\"text\" placeholder=\"brand\" required>\n        </div>\n        <div>\n            <input [(ngModel)]=\"materialpost.in_use_date\" type=\"date\" placeholder=\"purchase date\" required>\n        </div>\n        <button (click)='postMaterial()'>Add</button>\n      </form>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/circusmaterials/circusmaterials.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/circusmaterials/circusmaterials.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  display: grid;\n  grid-template-columns: repeat(2, 50%); }\n  body div {\n    margin-top: 6em; }\n  body div #searchbutton {\n      padding: 2px 2px; }\n  body div input {\n      margin-left: 1em;\n      text-align: left;\n      height: 1.5em; }\n  body div ul {\n      padding-top: 1;\n      margin-left: 1em; }\n  body div {\n    margin: 6em 1em; }\n  body div form {\n      display: grid;\n      grid-template-rows: repeat(3, 1fr);\n      border: 0.5px solid black;\n      margin: 1em 1em; }\n  body div form div {\n        height: 2em;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr); }\n  body div form div input {\n          margin: 0em 1em;\n          text-align: left;\n          height: 1.5em; }\n  body div form button {\n        border: none;\n        box-shadow: none;\n        background-color: #3be5ce;\n        padding: 1em 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2lyY3VzbWF0ZXJpYWxzL0M6XFxVc2Vyc1xcSm9uYXNcXE5leHRjbG91ZFxcQ2xvdWQgQVBJc1xcSm9uYXNcXHNlbWVzdGVyLXByb2plY3RcXFByb2plY3RDbG91ZEFQSVxccHJvamVjdENsb3VkQVBJL3NyY1xcYXBwXFxjaXJjdXNtYXRlcmlhbHNcXGNpcmN1c21hdGVyaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUMsRUFBQTtFQUZ2QztJQUlJLGVBQWUsRUFBQTtFQUpuQjtNQU1NLGdCQUFnQixFQUFBO0VBTnRCO01BU00sZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixhQUFhLEVBQUE7RUFYbkI7TUFjTSxjQUFjO01BQ2QsZ0JBQWdCLEVBQUE7RUFmdEI7SUFtQkksZUFBZSxFQUFBO0VBbkJuQjtNQXFCTSxhQUFhO01BQ2Isa0NBQWtDO01BQ2xDLHlCQUF5QjtNQUN6QixlQUFlLEVBQUE7RUF4QnJCO1FBMEJRLFdBQVc7UUFDWCxhQUFhO1FBQ2IscUNBQXFDLEVBQUE7RUE1QjdDO1VBOEJVLGVBQWU7VUFDZixnQkFBZ0I7VUFDaEIsYUFBYSxFQUFBO0VBaEN2QjtRQW9DUSxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLHlCQUFtQztRQUNuQyxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NpcmN1c21hdGVyaWFscy9jaXJjdXNtYXRlcmlhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNTAlKTtcclxuICBkaXZ7XHJcbiAgICBtYXJnaW4tdG9wOiA2ZW07XHJcbiAgICAjc2VhcmNoYnV0dG9ue1xyXG4gICAgICBwYWRkaW5nOiAycHggMnB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGhlaWdodDogMS41ZW07XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgcGFkZGluZy10b3A6IDE7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIG1hcmdpbjogNmVtIDFlbTtcclxuICAgIGZvcm17XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XHJcbiAgICAgIG1hcmdpbjogMWVtIDFlbTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgIG1hcmdpbjogMGVtIDFlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBidXR0b257XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCAyMjksIDIwNik7XHJcbiAgICAgICAgcGFkZGluZzogMWVtIDFlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/circusmaterials/circusmaterials.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/circusmaterials/circusmaterials.component.ts ***!
  \**************************************************************/
/*! exports provided: CircusmaterialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircusmaterialsComponent", function() { return CircusmaterialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var CircusmaterialsComponent = /** @class */ (function () {
    function CircusmaterialsComponent(api) {
        this.api = api;
        this.editOn = false;
        console.log('circusmaterial component');
    }
    CircusmaterialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getCircusMaterials().subscribe(function (material) {
            _this.materials = material;
            console.log(_this.materials);
        });
    };
    CircusmaterialsComponent.prototype.searchMaterial = function () {
        var _this = this;
        this.search = this.inputSearch.nativeElement.value;
        this.api.searchMaterial(Number(this.search)).subscribe(function (material) {
            _this.materialSearched = material;
        });
        console.log(this.editOn);
    };
    CircusmaterialsComponent.prototype.deleteMaterial = function () {
        this.search = this.inputSearch.nativeElement.value;
        console.log(this.search);
        this.api.deleteMaterial(Number(this.search)).subscribe(function (material) {
            return console.log('material deleted');
        });
    };
    CircusmaterialsComponent.prototype.putMaterial = function () {
        var _this = this;
        this.api.putMaterial(this.materialSearched).subscribe(function (material) {
            material.name = _this.inputName.nativeElement.value;
            return _this.materialSearched;
        });
        console.log('changed name');
    };
    CircusmaterialsComponent.prototype.postMaterial = function () {
        this.materialpost = {
            name: 'jonas',
            amount: 1,
            brand: 'jonas',
            categorie: 'human',
            in_use_date: new Date('15061999')
        };
        this.api.postCircusMaterial(this.materialpost).subscribe(function (material) {
            console.log(material);
        });
        console.log('added to api');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CircusmaterialsComponent.prototype, "inputSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nameChange'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CircusmaterialsComponent.prototype, "inputName", void 0);
    CircusmaterialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-circusmaterials',
            template: __webpack_require__(/*! ./circusmaterials.component.html */ "./src/app/circusmaterials/circusmaterials.component.html"),
            styles: [__webpack_require__(/*! ./circusmaterials.component.scss */ "./src/app/circusmaterials/circusmaterials.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CircusmaterialsComponent);
    return CircusmaterialsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <h2>Project CloudAPI</h2>\r\n    <div id=\"navtabs\">\r\n    <button [routerLink]=\"['places']\" >Places</button>\r\n    <button [routerLink]=\"['search']\" >Search</button>\r\n    <button [routerLink]=\"['trending']\">Trending</button>\r\n    <button [routerLink]=\"['circusMaterials']\">Circus materials inventory</button>\r\n    <!-- *ngIf=\"authService.isLoggedIn\" -->\r\n  </div>\r\n   <div>\r\n    <button class='login' *ngIf='!authService.isLoggedIn' (click)='authService.login()' >login</button>\r\n    <button  class='login' (click)='authService.logout()' *ngIf='authService.isLoggedIn' >logout</button>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  position: fixed;\n  width: 100%;\n  margin-top: 0;\n  background: #3be5ce;\n  height: 4em;\n  display: grid;\n  z-index: 1;\n  grid-template-columns: 25% 50% 25%; }\n  header h2 {\n    margin-left: 1em;\n    text-align: left;\n    line-height: 2.5em;\n    color: white; }\n  header #navtabs {\n    text-align: center;\n    margin-top: 1em; }\n  header #navtabs button {\n      color: white;\n      margin-top: 0.5em;\n      margin-left: 2em;\n      margin-right: 2em;\n      background: #3be5ce;\n      border: none; }\n  header #navtabs button:hover {\n      color: black; }\n  header .login {\n    margin-top: 1em;\n    background: white;\n    border: none;\n    padding: 0.5em;\n    border-radius: 5px;\n    color: #3be5ce; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcSm9uYXNcXE5leHRjbG91ZFxcQ2xvdWQgQVBJc1xcSm9uYXNcXHNlbWVzdGVyLXByb2plY3RcXFByb2plY3RDbG91ZEFQSVxccHJvamVjdENsb3VkQVBJL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQU4yQjtFQU8zQixXQUFXO0VBQ1gsYUFBYTtFQUNiLFVBQVU7RUFDVixrQ0FBa0MsRUFBQTtFQVJwQztJQVVJLGdCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQXVCLEVBQUE7RUFiM0I7SUFnQkksa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtFQWpCbkI7TUFtQk0sWUFBdUI7TUFDdkIsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsbUJBekJ1QjtNQTBCdkIsWUFBWSxFQUFBO0VBeEJsQjtNQTJCUSxZQUFpQixFQUFBO0VBM0J6QjtJQStCSSxlQUFlO0lBQ2YsaUJBQTRCO0lBQzVCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBdEN5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRoZWFkZXJDb2xvcjogcmdiKDU5LCAyMjksIDIwNik7XG5cbiAgaGVhZGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6ICRoZWFkZXJDb2xvcjtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNTAlIDI1JTtcbiAgICBoMntcbiAgICAgIG1hcmdpbi1sZWZ0OiAgMWVtO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgICAgIGNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xuICAgIH1cbiAgICAjbmF2dGFic3tcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgIGJ1dHRvbntcbiAgICAgICAgY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogJGhlYWRlckNvbG9yO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgIGNvbG9yOiByZ2IoMCwwLDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgLmxvZ2lue1xuICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgY29sb3I6ICRoZWFkZXJDb2xvcjtcbiAgICB9XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/keys.ts":
/*!*************************!*\
  !*** ./src/app/keys.ts ***!
  \*************************/
/*! exports provided: Keys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
var Keys = /** @class */ (function () {
    function Keys() {
        this.client_id = '41NV1V1QCP1WNT1EGPPWTONPOWUSTBWAQC0LQE5OR0L5A1VA';
        this.client_secret = '0VGNPPDOPF452YKPMSKV1TNOHTGAMTR2M1ID1USKTNESBGZA';
    }
    return Keys;
}());



/***/ }),

/***/ "./src/app/places-page/places-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/places-page/places-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <p *ngIf='places.length == 0; else showPlaces'> No places</p>\n    <ng-template #showPlaces>\n      <ul>\n        <li *ngFor=\"let place of places\">\n          <div class=\"place\">\n            <strong>{{place.name}}</strong>\n            <div>\n              <p *ngIf='place.location.address'>{{place.location.address}}</p>\n              <p>{{place.location.distance}} meters away</p>\n            </div>\n            <img *ngIf='place.categories' [src]=\"place.categories[0].icon.prefix + 64 + place.categories[0].icon.suffix\"\n              alt=\"img\">\n          </div>\n        </li>\n      </ul>\n    </ng-template>\n</body>\n\n"

/***/ }),

/***/ "./src/app/places-page/places-page.component.scss":
/*!********************************************************!*\
  !*** ./src/app/places-page/places-page.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fdfdf9;\n  padding-top: 4em; }\n  body ul li {\n    padding-left: 30%;\n    padding-right: 30%;\n    padding-top: 0.25em;\n    padding-bottom: 0.25em; }\n  body ul li .place {\n      border: solid 0.5px #b6b6b6;\n      margin: 0.5em 0.5em;\n      display: grid;\n      grid-template-rows: repeat(1em, 4);\n      text-align: left;\n      height: 10em;\n      width: auto; }\n  body ul li .place strong {\n        margin-top: 1em;\n        margin-left: 1em; }\n  body ul li .place div p {\n        display: inline-block;\n        margin-left: 1em; }\n  body ul li .place img {\n        -webkit-filter: invert(100%);\n                filter: invert(100%);\n        margin-left: 1em;\n        width: 3.5em;\n        height: 3.5em;\n        border: solid 1px black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzLXBhZ2UvQzpcXFVzZXJzXFxKb25hc1xcTmV4dGNsb3VkXFxDbG91ZCBBUElzXFxKb25hc1xcc2VtZXN0ZXItcHJvamVjdFxcUHJvamVjdENsb3VkQVBJXFxwcm9qZWN0Q2xvdWRBUEkvc3JjXFxhcHBcXHBsYWNlcy1wYWdlXFxwbGFjZXMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUE0QjtFQUM1QixnQkFBZ0IsRUFBQTtFQUZsQjtJQUtNLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQixFQUFBO0VBUjVCO01BVVUsMkJBQXNDO01BQ3RDLG1CQUFtQjtNQUNuQixhQUFhO01BQ2Isa0NBQWtDO01BQ2xDLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osV0FBVyxFQUFBO0VBaEJyQjtRQWtCWSxlQUFlO1FBQ2YsZ0JBQWdCLEVBQUE7RUFuQjVCO1FBdUJjLHFCQUFxQjtRQUNyQixnQkFBZ0IsRUFBQTtFQXhCOUI7UUE0QlksNEJBQW9CO2dCQUFwQixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixhQUFhO1FBQ2IsdUJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMtcGFnZS9wbGFjZXMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGJhY2tncm91bmQ6IHJnYigyNTMsMjUzLDI0OSk7XG4gIHBhZGRpbmctdG9wOiA0ZW07XG4gIHVse1xuICAgIGxpe1xuICAgICAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG4gICAgICBwYWRkaW5nLXRvcDogMC4yNWVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcbiAgICAgICAgLnBsYWNle1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggcmdiKDE4MiwgMTgyLCAxODIpO1xuICAgICAgICAgIG1hcmdpbjogMC41ZW0gMC41ZW07XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxZW0sIDQpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgaGVpZ2h0OiAxMGVtO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIHN0cm9uZ3tcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdntcbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgICAgICAgd2lkdGg6IDMuNWVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigwLCAwLCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/places-page/places-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/places-page/places-page.component.ts ***!
  \******************************************************/
/*! exports provided: PlacesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPageComponent", function() { return PlacesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var PlacesPageComponent = /** @class */ (function () {
    function PlacesPageComponent(api) {
        var _this = this;
        this.api = api;
        this.places = [];
        console.log("place component");
        this.api.getplaces().subscribe((function (results) {
            _this.places = results.response.venues;
        }));
    }
    PlacesPageComponent.prototype.ngOnInit = function () { };
    PlacesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-places-page',
            template: __webpack_require__(/*! ./places-page.component.html */ "./src/app/places-page/places-page.component.html"),
            styles: [__webpack_require__(/*! ./places-page.component.scss */ "./src/app/places-page/places-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], PlacesPageComponent);
    return PlacesPageComponent;
}());



/***/ }),

/***/ "./src/app/search-page/search-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-page/search-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='inputfield'>\n  <div>\n    <label for='search'>Search: </label>\n    <input #search placeholder='search'>\n    <button (click)='SearchGivenInput()'></button>\n  </div>\n  <div>\n    <label>search ID: </label>\n    <input #searchID placeholder='id'>\n    <button (click)='SearchForID()'></button>\n  </div>\n</div>\n\n<div class='idResult'>\n  <div>\n    <strong>{{searchedID.id}}</strong>\n    <p>{{searchedID.name}}</p>\n    <p>{{searchedID.location.address}}</p>\n    <p>{{searchedID.likes.summary}}</p>\n    <p>{{searchedID.beenHere.count}} times visited</p>  <br>\n    <p>{{searchedID.description}}</p>\n  </div>\n</div>\n\n<div class='showResult'>\n  <p *ngIf='searchedPlaces.length == 0; else Search'> No search</p>\n  <ng-template #Search>\n    <ul>\n      <li *ngFor='let search of searchedPlaces'>\n        <div class='search'>\n          <strong>{{search.name}}</strong>\n          <p>{{search.id}}</p>\n          <div>\n            <p *ngIf='search.location.address'>{{search.location.address}}</p>\n            <p>{{search.location.distance}} meters away</p>\n          </div>\n          <img *ngIf='search.categories'\n            [src]='search.categories[0].icon.prefix + 64 + search.categories[0].icon.suffix' alt='img'>\n        </div>\n      </li>\n    </ul>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/search-page/search-page.component.scss":
/*!********************************************************!*\
  !*** ./src/app/search-page/search-page.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#inputfield {\n  z-index: 1;\n  width: 100%;\n  height: 4em;\n  padding-top: 4em;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n  #inputfield div {\n    top: 4em;\n    height: 4em;\n    width: 100%;\n    background: #e5e2e2;\n    text-align: center;\n    padding-bottom: 1em; }\n  #inputfield div input {\n      margin-top: 1em; }\n  #inputfield div label {\n      margin-left: 1em; }\n  #inputfield div button {\n      background: url(\"https://image.flaticon.com/icons/svg/49/49116.svg\");\n      background-size: cover;\n      width: 1.5em;\n      height: 1.5em;\n      outline: none;\n      border: none;\n      margin-left: 1em; }\n  .idResult {\n  margin-top: 5em; }\n  .idResult div {\n    text-align: left;\n    margin: 0% 40%;\n    background: #3be5ce;\n    padding: 1em 1em; }\n  .showResult {\n  z-index: 0;\n  background: #fdfdf9; }\n  .showResult ul {\n    padding-top: 8em; }\n  .showResult ul li {\n      padding-left: 30%;\n      padding-right: 30%;\n      padding-top: 0.25em;\n      padding-bottom: 0.25em; }\n  .showResult ul li .search {\n        z-index: 0;\n        border: solid 0.5px #b6b6b6;\n        margin: 0.5em 0.5em;\n        display: grid;\n        grid-template-rows: repeat(1em, 4);\n        text-align: left;\n        height: 10em;\n        width: auto; }\n  .showResult ul li .search strong {\n          margin-top: 1em;\n          margin-left: 1em; }\n  .showResult ul li .search p {\n          margin-left: 1em; }\n  .showResult ul li .search img {\n          z-index: 0;\n          -webkit-filter: invert(100%);\n                  filter: invert(100%);\n          margin-left: 1em;\n          width: 3.5em;\n          height: 3.5em;\n          border: solid 1px black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXBhZ2UvQzpcXFVzZXJzXFxKb25hc1xcTmV4dGNsb3VkXFxDbG91ZCBBUElzXFxKb25hc1xcc2VtZXN0ZXItcHJvamVjdFxcUHJvamVjdENsb3VkQVBJXFxwcm9qZWN0Q2xvdWRBUEkvc3JjXFxhcHBcXHNlYXJjaC1wYWdlXFxzZWFyY2gtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCLEVBQUE7RUFOaEM7SUFRSSxRQUFRO0lBRVIsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBZHZCO01BZ0JNLGVBQWUsRUFBQTtFQWhCckI7TUFtQk0sZ0JBQWdCLEVBQUE7RUFuQnRCO01BdUJNLG9FQUFvRTtNQUNwRSxzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLGFBQWE7TUFDYixhQUFhO01BQ2IsWUFBWTtNQUNaLGdCQUFnQixFQUFBO0VBS3RCO0VBQ0UsZUFBZSxFQUFBO0VBRGpCO0lBR0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBNkI7SUFDN0IsZ0JBQWdCLEVBQUE7RUFHcEI7RUFDRSxVQUFVO0VBQ1YsbUJBQTRCLEVBQUE7RUFGOUI7SUFJSSxnQkFBZ0IsRUFBQTtFQUpwQjtNQU1NLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLHNCQUFzQixFQUFBO0VBVDVCO1FBV1UsVUFBVTtRQUNWLDJCQUFzQztRQUN0QyxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGtDQUFrQztRQUNsQyxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFdBQVcsRUFBQTtFQWxCckI7VUFvQlksZUFBZTtVQUNmLGdCQUFnQixFQUFBO0VBckI1QjtVQXdCWSxnQkFBZ0IsRUFBQTtFQXhCNUI7VUEyQlksVUFBVTtVQUNWLDRCQUFvQjtrQkFBcEIsb0JBQW9CO1VBQ3BCLGdCQUFnQjtVQUNoQixZQUFZO1VBQ1osYUFBYTtVQUNiLHVCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXBhZ2Uvc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW5wdXRmaWVsZHtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNGVtO1xuICBwYWRkaW5nLXRvcDogNGVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gIGRpdntcbiAgICB0b3A6IDRlbTtcbiAgICAvL3Bvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjI5LCAyMjYsIDIyNik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgaW5wdXR7XG4gICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgfVxuICAgIGxhYmVse1xuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICB9XG4gICAgYnV0dG9ue1xuICAgICAgLy9saW5lLWhlaWdodDogMmVtO1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzQ5LzQ5MTE2LnN2Z1wiKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB3aWR0aDogMS41ZW07XG4gICAgICBoZWlnaHQ6IDEuNWVtO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG5cbiAgICB9XG4gIH1cbn1cbi5pZFJlc3VsdHtcbiAgbWFyZ2luLXRvcDogNWVtO1xuICBkaXZ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDAlIDQwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTksIDIyOSwgMjA2KTtcbiAgICBwYWRkaW5nOiAxZW0gMWVtO1xuICB9XG59XG4uc2hvd1Jlc3VsdHtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZDogcmdiKDI1MywyNTMsMjQ5KTtcbiAgdWx7XG4gICAgcGFkZGluZy10b3A6IDhlbTtcbiAgICBsaXtcbiAgICAgIHBhZGRpbmctbGVmdDogMzAlO1xuICAgICAgcGFkZGluZy1yaWdodDogMzAlO1xuICAgICAgcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjI1ZW07XG4gICAgICAgIC5zZWFyY2h7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4IHJnYigxODIsIDE4MiwgMTgyKTtcbiAgICAgICAgICBtYXJnaW46IDAuNWVtIDAuNWVtO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMWVtLCA0KTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGhlaWdodDogMTBlbTtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBzdHJvbmd7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwe1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgICAgIHdpZHRoOiAzLjVlbTtcbiAgICAgICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/search-page/search-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-page/search-page.component.ts ***!
  \******************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent(api) {
        this.api = api;
        this.searchedPlaces = [];
        console.log('search component');
    }
    SearchPageComponent.prototype.ngOnInit = function () {
    };
    SearchPageComponent.prototype.SearchGivenInput = function () {
        var _this = this;
        this.search = this.inputSearch.nativeElement.value;
        this.api.searchVenue(this.search).subscribe((function (word) {
            _this.searchedPlaces = word.response.venues;
        }));
    };
    SearchPageComponent.prototype.SearchForID = function () {
        var _this = this;
        console.log('getbyid');
        this.searchID = this.inputSearchID.nativeElement.value;
        this.api.getByID(this.searchID).subscribe((function (id) {
            _this.searchedID = id.response.venue;
            console.log(id.response.venue);
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchPageComponent.prototype, "inputSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchID'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchPageComponent.prototype, "inputSearchID", void 0);
    SearchPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-page',
            template: __webpack_require__(/*! ./search-page.component.html */ "./src/app/search-page/search-page.component.html"),
            styles: [__webpack_require__(/*! ./search-page.component.scss */ "./src/app/search-page/search-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),

/***/ "./src/app/trending-page/trending-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/trending-page/trending-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <p *ngIf='trending.length == 0; else Trend'> No trending</p>\n  <ng-template #Trend>\n    <ul>\n      <li *ngFor=\"let trend of trending\">\n        <div class='trend'>\n          <strong>{{trend.name}}</strong>\n          <div>\n              <p *ngIf='trend.location.address'>{{trend.location.address}}</p>\n              <p>{{trend.location.distance}} meters away</p>\n          </div>\n          <img *ngIf='trend.categories' [src]=\"trend.categories[0].icon.prefix + 64 + trend.categories[0].icon.suffix\"\n            alt=\"img\">\n        </div>\n      </li>\n    </ul>\n  </ng-template>\n</body>\n"

/***/ }),

/***/ "./src/app/trending-page/trending-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/trending-page/trending-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fdfdf9;\n  padding-top: 4em; }\n  body ul li {\n    padding-left: 30%;\n    padding-right: 30%;\n    padding-top: 0.25em;\n    padding-bottom: 0.25em; }\n  body ul li .trend {\n      border: solid 0.5px #b6b6b6;\n      margin: 0.5em 0.5em;\n      display: grid;\n      grid-template-rows: repeat(4, 1fr);\n      text-align: left;\n      height: 10em;\n      width: auto; }\n  body ul li .trend strong {\n        margin-top: 1em;\n        margin-left: 1em; }\n  body ul li .trend div p {\n        display: inline-block;\n        margin-left: 1em; }\n  body ul li .trend div p p {\n          padding-left: 3em;\n          color: 0; }\n  body ul li .trend img {\n        -webkit-filter: invert(100%);\n                filter: invert(100%);\n        margin-left: 1em;\n        width: 3.5em;\n        height: 3.5em;\n        border: solid 1px black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlbmRpbmctcGFnZS9DOlxcVXNlcnNcXEpvbmFzXFxOZXh0Y2xvdWRcXENsb3VkIEFQSXNcXEpvbmFzXFxzZW1lc3Rlci1wcm9qZWN0XFxQcm9qZWN0Q2xvdWRBUElcXHByb2plY3RDbG91ZEFQSS9zcmNcXGFwcFxcdHJlbmRpbmctcGFnZVxcdHJlbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUE0QjtFQUM1QixnQkFBZ0IsRUFBQTtFQUZsQjtJQUtNLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQixFQUFBO0VBUjVCO01BVVUsMkJBQXNDO01BQ3RDLG1CQUFtQjtNQUNuQixhQUFhO01BQ2Isa0NBQWtDO01BQ2xDLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osV0FBVyxFQUFBO0VBaEJyQjtRQWtCWSxlQUFlO1FBQ2YsZ0JBQWdCLEVBQUE7RUFuQjVCO1FBdUJjLHFCQUFxQjtRQUNyQixnQkFBZ0IsRUFBQTtFQXhCOUI7VUEwQmdCLGlCQUFpQjtVQUNqQixRQUE0QixFQUFBO0VBM0I1QztRQWdDWSw0QkFBb0I7Z0JBQXBCLG9CQUFvQjtRQUNwQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGFBQWE7UUFDYix1QkFBOEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RyZW5kaW5nLXBhZ2UvdHJlbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGJhY2tncm91bmQ6IHJnYigyNTMsMjUzLDI0OSk7XG4gIHBhZGRpbmctdG9wOiA0ZW07XG4gIHVse1xuICAgIGxpe1xuICAgICAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzMCU7XG4gICAgICBwYWRkaW5nLXRvcDogMC4yNWVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcbiAgICAgICAgLnRyZW5ke1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggcmdiKDE4MiwgMTgyLCAxODIpO1xuICAgICAgICAgIG1hcmdpbjogMC41ZW0gMC41ZW07XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgaGVpZ2h0OiAxMGVtO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgIHN0cm9uZ3tcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdntcbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgICAgICAgcHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZSgkY29sb3I6ICMwMDAwMDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAgICAgICAgIHdpZHRoOiAzLjVlbTtcbiAgICAgICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMCwgMCwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/trending-page/trending-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/trending-page/trending-page.component.ts ***!
  \**********************************************************/
/*! exports provided: TrendingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendingPageComponent", function() { return TrendingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var TrendingPageComponent = /** @class */ (function () {
    function TrendingPageComponent(api) {
        var _this = this;
        this.api = api;
        this.trending = [];
        this.api.gettrending().subscribe((function (trending) {
            _this.trending = trending.response.venues;
            console.log("trending component");
        }));
    }
    TrendingPageComponent.prototype.ngOnInit = function () {
    };
    TrendingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trending-page',
            template: __webpack_require__(/*! ./trending-page.component.html */ "./src/app/trending-page/trending-page.component.html"),
            styles: [__webpack_require__(/*! ./trending-page.component.scss */ "./src/app/trending-page/trending-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], TrendingPageComponent);
    return TrendingPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    auth: {
        clientID: 'etQXBmxlniSbbwBkQRRVjF2N0Hjxe7yX',
        domain: 'jonasvanhoof.eu.auth0.com',
        audience: 'https://jonasvanhoof.me/circusMaterials',
        redirect: 'https://jonasvanhoof.me/callback',
        scope: 'openid profile email'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jonas\Nextcloud\Cloud APIs\Jonas\semester-project\ProjectCloudAPI\projectCloudAPI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map