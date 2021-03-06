"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var ShareDataService = /** @class */ (function () {
    function ShareDataService() {
        this.subject = new BehaviorSubject_1.BehaviorSubject('no value');
    }
    ShareDataService.prototype.setString = function (data) {
        this.subject.next(data);
    };
    ShareDataService.prototype.clearString = function () {
        this.subject.next('no value');
    };
    ShareDataService.prototype.getString = function () {
        return this.subject.asObservable();
    };
    ShareDataService = __decorate([
        core_1.Injectable()
    ], ShareDataService);
    return ShareDataService;
}());
exports.ShareDataService = ShareDataService;
//# sourceMappingURL=ShareData.service.js.map