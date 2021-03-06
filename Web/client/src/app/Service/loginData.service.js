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
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
require("../interfaces/IUser.interface");
var UserModel_1 = require("../Model/UserModel");
var LoginDataService = /** @class */ (function () {
    function LoginDataService(http) {
        this.http = http;
        this.url = 'http://localhost:4000/users';
    }
    // Hier alle nodige REST API calls:
    LoginDataService.prototype.getUsers = function () {
        return this.http.get(this.url)
            .map((function (res) { return res; }));
    };
    LoginDataService.prototype.createUser = function (username, password, id) {
        var u = new UserModel_1.User();
        u.id = id;
        u.userID = username;
        u.password = password;
        console.log(u);
        this.http.post(this.url, u).subscribe();
    };
    LoginDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginDataService);
    return LoginDataService;
}());
exports.LoginDataService = LoginDataService;
//# sourceMappingURL=loginData.service.js.map