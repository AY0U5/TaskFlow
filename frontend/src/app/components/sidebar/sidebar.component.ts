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
    {name: "Projects", icon: 'presentation'},
    {name: "Teams", icon: 'users'},
    {name: "Tasks", icon: 'clipboard-list'},
    {name: "Settings", icon: 'settings'},
  ]
}
