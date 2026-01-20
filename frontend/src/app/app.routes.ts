import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/public/home/home.component";
import {LoginComponent} from "./pages/public/login/login.component";
import {authGuard} from "./shared/guard/auth.guard";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  /*{
    path: 'dashboard',
    canActivate: [authGuard]
  }*/
];
