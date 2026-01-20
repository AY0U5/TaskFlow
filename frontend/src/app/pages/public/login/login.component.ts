import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../../shared/service/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public _email: string = '';
  public _password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (result) => {
        this.authService.saveToken(result.jwt);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
