import { provideHttpClient } from '@angular/common/http';
//import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
/*import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}*/

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(APP_ROUTES)],
});
