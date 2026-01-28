import { Component } from '@angular/core';
import {ProjectClientService} from "../../../../shared/service/client/project-client.service";
import {Project} from "../../../../shared/model/project/project";
import {LucideAngularModule} from "lucide-angular";
import {FormsModule} from "@angular/forms";
import {Dialog} from "primeng/dialog";
import {InputText} from "primeng/inputtext";
import {Button} from "primeng/button";
import {MultiSelect} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {Calendar} from "primeng/calendar";
import {InputTextarea} from "primeng/inputtextarea";
import {ProjectStatus} from "../../../../shared/model/util/types";
import {Team} from "../../../../shared/model/team/team";

@Component({
  selector: 'app-project-create',
  standalone: true,
  templateUrl: './project-create.component.html',
  imports: [
    LucideAngularModule,
    FormsModule,
    Dialog,
    InputText,
    Button,
    MultiSelect,
    DropdownModule,
    Calendar,
    InputTextarea
  ],
  styleUrl: './project-create.component.scss'
})
export class ProjectCreateComponent {

  private _project: Project = new Project();
  statuses : Array<ProjectStatus> = [];
  teams : Array<Team> = [];

  constructor(
    private projectClientService: ProjectClientService,
  ) {
  }

  get viewDialogue(): boolean {
    return this.projectClientService.viewDialogue;
  }

  set viewDialogue(value: boolean) {
    this.projectClientService.viewDialogue = value;
  }


  get project(): Project {
    return this._project;
  }

  set project(value: Project) {
    this._project = value;
  }

  close() {
    // emit event or toggle boolean
    console.log('close modal');
  }

  submit() {
    console.log(this.project);
    // call service here
  }
}
