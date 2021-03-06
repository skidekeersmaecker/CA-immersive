import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HomeDataService} from '../Service/homeData.service';
import '../interfaces/IProject.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {Project} from '../Model/ProjectModel';
import {ShareDataService} from '../Service/ShareData.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'my-app',
  templateUrl: 'app/home/home.component.html',
  providers: [ HomeDataService ]
})

export class HomeComponent implements OnInit {

  listProjects: Observable<IProject[]>;
  projectNameTest: string;
  subscription: Subscription;

  constructor(private router: Router, private _homeDataService: HomeDataService, public _shareDataService: ShareDataService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  projectClick(name: string) {
    this._shareDataService.setString(name);
    this.navigateToProjectComponent();
  };

  createProjectClick(projectName: string) {
    this._homeDataService.postProject(projectName).subscribe( res =>
      this.getProjects());
  }

  deleteProjectClick(project: Project) {
    this._homeDataService.deleteProject(project).subscribe( res =>
      this.getProjects());
  }

  // inline methods
  private getProjects() {
    this.listProjects = this._homeDataService.getProjects().do(
      response => this.listProjects = Observable.of(response)
    );
  }

  navigateToProjectComponent() {
    this.router.navigateByUrl('/project');
  }
}
