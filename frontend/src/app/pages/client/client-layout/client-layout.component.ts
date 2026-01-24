import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../../../components/sidebar/sidebar.component";
import {TopbarComponent} from "../../../components/topbar/topbar.component";
import {CommonService} from "../../../shared/service/common/common.service";

@Component({
  selector: 'app-client-layout',
  standalone: true,
    imports: [
        RouterOutlet,
        SidebarComponent,
        TopbarComponent
    ],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.scss'
})
export class ClientLayoutComponent {

  constructor(private commonService: CommonService) {
  }

  get isOpen(): boolean {
    return this.commonService.isOpen;
  }

  set isOpen(value: boolean) {
    this.commonService.isOpen = value;
  }

  get isShow(): boolean {
    return this.commonService.isShow;
  }

  set isShow(value: boolean) {
    this.commonService.isShow = value;
  }
}
