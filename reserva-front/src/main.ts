import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';     // se renomear a classe para AppComponent, altera aqui também

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
