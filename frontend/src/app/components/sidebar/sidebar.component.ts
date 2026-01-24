import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {LucideAngularModule} from "lucide-angular";
import {CommonService} from "../../shared/service/common/common.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgForOf,
    LucideAngularModule,
    NgIf,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menuItems = [
    {
      name: "Dashboard",
      icon: "layout-dashboard",
      path: '',

    },
    {
      name: "Projects",
      icon: "presentation",
      expanded: false,
      items: [
        "FlowTask Platform",
        "User Analytics Revamp",
        "Mobile App Redesign",
        "Payment Integration"
      ],
      path: '/projects',
    },
    {
      name: "Teams",
      icon: "users",
      expanded: false,
      items: [
        "Frontend Team",
        "Backend Team",
        "Data & Analytics",
        "Product Management"
      ],
      path: '/teams',
    },
    {
      name: "Tasks",
      icon: "clipboard-list",
      expanded: false,
      items: [
        "Sprint Planning",
        "Bug Fixes",
        "Feature Development",
        "Code Review"
      ],
      path: '/tasks',
    },
    {
      name: "Calendar",
      icon: "calendar",
    }
  ];

  constructor(
    private commonService: CommonService,
    private router: Router
  ) {
  }

  public toggleSideBar(){
    this.isOpen = !this.isOpen;
    this.menuItems.forEach(item => {
      item.expanded = false;
    })
  }


  get isOpen(): boolean {
    return this.commonService.isOpen;
  }

  set isOpen(value: boolean) {
    this.commonService.isOpen = value;
  }


  openItem(menu: any) {
    if (this.isOpen) {
      menu.expanded = !menu.expanded;
    }else {
      this.router.navigate(['/collaborators'+menu.path]);
    }
  }
}
