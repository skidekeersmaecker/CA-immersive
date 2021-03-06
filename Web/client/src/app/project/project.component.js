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
var projectData_service_1 = require("../Service/projectData.service");
var ShareData_service_1 = require("../Service/ShareData.service");
var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(router, _projectDataService, _shareDataService) {
        var _this = this;
        this.router = router;
        this._projectDataService = _projectDataService;
        this._shareDataService = _shareDataService;
        this.addContributor = function () {
            // als veld ingevuld en button click
            // dan nieuwe contributor naar database opslagen
            // als op database opgeslagen
            // dan lijst met contributers refreshen
        };
        this.deleteContributor = function () {
            // als op delete knop van contributer wordt geklikt
            // dan contributor uit database verwijderen
            // als verwijderd
            // dan lijst met contributors refreshen
        };
        this.goBackClick = function () {
            this.router.navigateByUrl('/home');
        };
        this.subscription = this._shareDataService.getString().subscribe(function (res) { return _this.projectName = res; });
    }
    ProjectComponent.prototype.ngOnInit = function () {
        // alle measurements laden (met timestamp)
        // alle contributors van database voor dit project ophalen
        //this._shareDataService.subject.subscribe(response => console.log("test"));
    };
    ProjectComponent.prototype.ngOnDestroy = function () {
    };
    ProjectComponent.prototype.measurementClick = function () {
        // data van geklikte measurement doorsturen om in volgende compenent de juiste parameters te laden
        this.router.navigateByUrl('/measurement');
    };
    ;
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/project/project.component.html',
            providers: [projectData_service_1.ProjectDataService]
        }),
        __metadata("design:paramtypes", [router_1.Router, projectData_service_1.ProjectDataService, ShareData_service_1.ShareDataService])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map