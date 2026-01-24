import { Component } from '@angular/core';
import {SidebarComponent} from "../../../components/sidebar/sidebar.component";
import {TopbarComponent} from "../../../components/topbar/topbar.component";
import {CommonService} from "../../../shared/service/common/common.service";
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent,
    RouterOutlet,

  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {



}
