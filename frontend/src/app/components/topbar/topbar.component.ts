import { Component } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {CommonService} from "../../shared/service/common/common.service";
import {ProjectClientService} from "../../shared/service/client/project-client.service";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  constructor(
    private common:CommonService,
    private projectClientService:ProjectClientService
  ) {
  }

  showDialog() {
    this.projectClientService.viewDialogue = !this.projectClientService.viewDialogue;
  }

  get isMobileOpen(): boolean {
    return this.common.isMobileOpen;
  }

  set isMobileOpen(value: boolean) {
    this.common.isMobileOpen = value;
  }

  showSideBar() {
    this.isMobileOpen = true
  }
}
