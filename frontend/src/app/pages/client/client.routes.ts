import { Routes } from '@angular/router';
import {ClientLayoutComponent} from "./client-layout/client-layout.component";

export const ClientRoutes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children : [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./project/project.component')
            .then(m => m.ProjectComponent)
      },
      {
        path: 'tasks',
        loadComponent: () =>
          import('./task/task.component')
            .then(m => m.TaskComponent)
      },
      {
        path: 'teams',
        loadComponent: () =>
          import('./team/team.component')
            .then(m => m.TeamComponent)
      },
    ]
  },
];
