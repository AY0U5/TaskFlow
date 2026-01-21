import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgForOf,
    LucideAngularModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems = [
    {name: "Dashboard", icon: 'layout-dashboard'},
    {name: "Projects", icon: 'layout-dashboard'},
    {name: "Teams", icon: 'layout-dashboard'},
    {name: "Tasks", icon: 'layout-dashboard'},
    {name: "Settings", icon: 'layout-dashboard'},
  ]
}
