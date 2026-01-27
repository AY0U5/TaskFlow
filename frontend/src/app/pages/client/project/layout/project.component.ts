import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ProjectCreateComponent} from "../project-create/project-create.component";
import {ProjectClientService} from "../../../../shared/service/client/project-client.service";
import {Button} from "primeng/button";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    NgForOf,
    ProjectCreateComponent,
    NgIf,
    Button
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects = [
    {
      "id": 1,
      "name": "FlowTask Platform",
      "description": "Core project management platform for teams, tasks, and analytics.",
      "createdDate": "2025-10-01T09:30:00Z",
      "status": "IN_PROGRESS",
      "teams": [
        {
          "id": 10,
          "name": "Frontend Team",
          "teamUsers": [
            {
              "id": 100,
              "role": "OWNER",
              "user": {
                "id": 1000,
                "username": "ayoub",
                "email": "ayoub@flowtask.com"
              }
            },
            {
              "id": 101,
              "role": "MEMBER",
              "user": {
                "id": 1001,
                "username": "sara",
                "email": "sara@flowtask.com"
              }
            }
          ]
        },
        {
          "id": 11,
          "name": "Backend Team",
          "teamUsers": [
            {
              "id": 102,
              "role": "MANAGER",
              "user": {
                "id": 1002,
                "username": "omar",
                "email": "omar@flowtask.com"
              }
            }
          ]
        }
      ]
    },

    {
      "id": 2,
      "name": "User Analytics Revamp",
      "description": "Redesign analytics dashboards and improve KPI tracking.",
      "createdDate": "2025-09-15T14:00:00Z",
      "status": "NOT_STARTED",
      "teams": [
        {
          "id": 12,
          "name": "Data & Analytics",
          "teamUsers": [
            {
              "id": 103,
              "role": "OWNER",
              "user": {
                "id": 1003,
                "username": "amina",
                "email": "amina@flowtask.com"
              }
            },
            {
              "id": 104,
              "role": "MEMBER",
              "user": {
                "id": 1004,
                "username": "youssef",
                "email": "youssef@flowtask.com"
              }
            }
          ]
        }
      ]
    },
  ]

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

}
