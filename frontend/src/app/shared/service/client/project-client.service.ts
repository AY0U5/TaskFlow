import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectClientService {

  private _viewDialogue = false;

  constructor() { }


  get viewDialogue(): boolean {
    return this._viewDialogue;
  }

  set viewDialogue(value: boolean) {
    this._viewDialogue = value;
  }
}
