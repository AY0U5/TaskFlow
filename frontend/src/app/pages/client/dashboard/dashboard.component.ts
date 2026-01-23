import { Component } from '@angular/core';
import {SidebarComponent} from "../../../components/sidebar/sidebar.component";
import {TopbarComponent} from "../../../components/topbar/topbar.component";
import {CommonService} from "../../../shared/service/common/common.service";


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

  constructor(private commonService: CommonService) {
  }

  get isOpen(): boolean {
    return this.commonService.isOpen;
  }

  set isOpen(value: boolean) {
    this.commonService.isOpen = value;
  }

}
