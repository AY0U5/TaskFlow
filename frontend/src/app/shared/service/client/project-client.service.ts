import { Injectable } from '@angular/core';
import {environment} from "../../../../environment/environment";
import {Project} from "../../model/project/project";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectClientService {

  private _viewDialogue = false;
  private _API = environment.baseUrl + '/projects';
  constructor(
    private http: HttpClient,
  ) { }

  public save(project: Project) {
    this.http.post<Project>(this.API + '/', project)
  }



  get API(): string {
    return this._API;
  }

  set API(value: string) {
    this._API = value;
  }

  get viewDialogue(): boolean {
    return this._viewDialogue;
  }

  set viewDialogue(value: boolean) {
    this._viewDialogue = value;
  }
}
