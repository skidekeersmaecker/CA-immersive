"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var loginData_service_1 = require("../Service/loginData.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _loginServiceData) {
        this.router = router;
        this._loginServiceData = _loginServiceData;
        this.loginClick = function () {
            // als geverifierd
            // dan => this.navigateToHomeComponent();
            // als fout
            // dan error
            // test => OK
            console.log(this._loginServiceData.getData());
        };
        this.signupClick = function () {
            // als velden ingevuld en button klik
            // dan data pushen naar database
            // als dan data in database
            // dan => (methode hier onder)
            this.navigateToHomeComponent();
        };
    }
    // inline methods
    LoginComponent.prototype.navigateToHomeComponent = function () {
        // data van specifieke user doorgeven
        this.router.navigateByUrl('/home');
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/login/login.component.html',
            providers: [loginData_service_1.LoginDataService]
        }),
        __metadata("design:paramtypes", [router_1.Router, loginData_service_1.LoginDataService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map