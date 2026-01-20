import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {Token} from "../model/security/token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _API = environment.baseUrl + '/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<Token>(`${this.API}/authenticate`, {
      username,
      password
    });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }


  get API(): string {
    return this._API;
  }

  set API(value: string) {
    this._API = value;
  }
}
