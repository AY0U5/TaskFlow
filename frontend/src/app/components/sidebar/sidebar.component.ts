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
      expanded: true,
      items: [],
    },
    {
      name: "Projects",
      icon: "presentation",
      expanded: true,
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
      expanded: true,
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
      expanded: true,
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
      expanded: true,
      items: [],
    }
  ];

  constructor(
    private commonService: CommonService,
    private router: Router
  ) {
  }

  public toggleSideBar(){
    if (window.innerWidth < 768) {
      this.isMobileOpen = !this.isMobileOpen;
    } else {
      this.isOpen = !this.isOpen;
      this.menuItems.forEach(item => {
        item.expanded = !item.expanded;
      })
    }
  }


  get isOpen(): boolean {
    return this.commonService.isOpen;
  }

  set isOpen(value: boolean) {
    this.commonService.isOpen = value;
  }

  get isMobileOpen(): boolean {
    return this.commonService.isMobileOpen;
  }

  set isMobileOpen(value: boolean) {
    this.commonService.isMobileOpen = value;
  }


  openItem(menu: any) {
      this.router.navigate(['/collaborators'+menu.path]);
      this.isMobileOpen = false;
  }
}
