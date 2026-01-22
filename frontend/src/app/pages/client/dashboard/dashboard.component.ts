import { Component } from '@angular/core';
import {SidebarComponent} from "../../../components/sidebar/sidebar.component";
import {TopbarComponent} from "../../../components/topbar/topbar.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent,

  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
