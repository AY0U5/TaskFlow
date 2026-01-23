import { Component } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";

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

}
