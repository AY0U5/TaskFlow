import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {jwtInterceptor} from "./shared/interceptor/jwt.interceptor";
import {
  LucideAngularModule,
  Presentation,
  Calendar,
  Pin
} from "lucide-angular";
import {providePrimeNG} from "primeng/config";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(),
    provideHttpClient(
      withInterceptors([jwtInterceptor])
    ),
    importProvidersFrom(
      LucideAngularModule.pick({
        Presentation,
        Calendar,
        Pin
      })
    ),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
