import {Component} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {LucideAngularModule} from "lucide-angular";

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

  private _isOpen : boolean = true;
  menuItems = [
    { name: "Dashboard", icon: "layout-dashboard" },
    {
      name: "Projects",
      icon: "presentation",
      items: [
        "FlowTask Platform",
        "User Analytics Revamp",
        "Mobile App Redesign",
        "Payment Integration"
      ]
    },
    {
      name: "Teams",
      icon: "users",
      items: [
        "Frontend Team",
        "Backend Team",
        "Data & Analytics",
        "Product Management"
      ]
    },
    {
      name: "Tasks",
      icon: "clipboard-list",
      items: [
        "Sprint Planning",
        "Bug Fixes",
        "Feature Development",
        "Code Review"
      ]
    }
  ];

  public toggleSideBar(){
    this.isOpen = !this.isOpen;
  }


  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
  }
}
