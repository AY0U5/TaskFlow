import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private _isOpen : boolean = true;
  private _isShow : boolean = false;
  constructor() { }


  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
  }


  get isShow(): boolean {
    return this._isShow;
  }

  set isShow(value: boolean) {
    this._isShow = value;
  }
}
