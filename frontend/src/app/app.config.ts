import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {jwtInterceptor} from "./shared/interceptor/jwt.interceptor";
import {
  LayoutDashboard,
  LucideAngularModule,
  Presentation,
  Users,
  ClipboardList,
  Settings,
  PanelLeft,
  ChevronDown,
  ChevronRight,
  Calendar
} from "lucide-angular";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(),
    provideHttpClient(
      withInterceptors([jwtInterceptor])
    ),
    importProvidersFrom(
      LucideAngularModule.pick({
        LayoutDashboard,
        Presentation,
        Users,
        ClipboardList,
        Settings,
        PanelLeft,
        ChevronDown,
        ChevronRight,
        Calendar
      })
    )
  ]
};
