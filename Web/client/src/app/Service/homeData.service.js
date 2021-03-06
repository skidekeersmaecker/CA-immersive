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
require("../interfaces/IProject.interface");
var ProjectModel_1 = require("../Model/ProjectModel");
require("rxjs/add/operator/map");
var HomeDataService = /** @class */ (function () {
    function HomeDataService(http) {
        this.http = http;
        this.url = 'http://localhost:4000';
        this.urlProjects = this.url + '/projects';
        this.bool = false;
    }
    // Hier alle nodige REST API calls:
    HomeDataService.prototype.getProjects = function () {
        return this.http.get(this.urlProjects).map(function (response) {
            return response;
        });
    };
    HomeDataService.prototype.postProject = function (projectName) {
        var dummyProject = new ProjectModel_1.Project();
        dummyProject.id = 10;
        dummyProject.name = projectName;
        dummyProject.apikey = projectName + dummyProject.id;
        console.log(dummyProject.name + dummyProject.apikey);
        return this.http.post(this.urlProjects, dummyProject);
    };
    HomeDataService.prototype.deleteProject = function (project) {
        console.log("delete: " + project.apikey);
        /////////// om te deleleten => ID naar APIKEY veranderen
        return this.http.delete(this.urlProjects + '/' + project.id);
    };
    HomeDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HomeDataService);
    return HomeDataService;
}());
exports.HomeDataService = HomeDataService;
//# sourceMappingURL=homeData.service.js.map