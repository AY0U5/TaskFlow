import { Component } from '@angular/core';
import {ProjectClientService} from "../../../../shared/service/client/project-client.service";
import {Dialog} from "primeng/dialog";
import {Button} from "primeng/button";
import {InputText} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {Project} from "../../../../shared/model/project/project";
import {InputTextarea} from "primeng/inputtextarea";

@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [
    Dialog,
    Button,
    InputText,
    FormsModule,
    DropdownModule,
    InputTextarea
  ],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.scss'
})
export class ProjectCreateComponent {

  private _project: Project = new Project();

  projectStatuses = [
    { label: 'Planned', value: 'PLANNED' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Completed', value: 'COMPLETED' }
  ];

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

  createProject() {
    this.viewDialogue = false;
  }
}
