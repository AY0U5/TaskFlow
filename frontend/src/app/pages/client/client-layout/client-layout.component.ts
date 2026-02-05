import { Component } from '@angular/core';
import {TopbarComponent} from "../../../components/topbar/topbar.component";

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [
    TopbarComponent
  ],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.scss'
})
export class ClientLayoutComponent {


}
