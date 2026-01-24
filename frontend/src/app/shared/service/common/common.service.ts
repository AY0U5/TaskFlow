import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private _isOpen : boolean = true;
  private _isMobileOpen : boolean = false;
  constructor() { }


  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
  }


  get isMobileOpen(): boolean {
    return this._isMobileOpen;
  }

  set isMobileOpen(value: boolean) {
    this._isMobileOpen = value;
  }
}
