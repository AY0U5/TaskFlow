import { Routes } from '@angular/router';
import {ClientLayoutComponent} from "./client-layout/client-layout.component";

export const ClientRoutes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children : [

    ]
  },
];
