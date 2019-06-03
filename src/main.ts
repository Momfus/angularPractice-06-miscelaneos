import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/* El argumento preserverWithespaces agregado a partir de la versión 6 para que los componentes de angular
tengan los espacios por defecto (ver también tsconfig.app.json )*/
platformBrowserDynamic().bootstrapModule(AppModule, { preserveWhitespaces: true })
  .catch(err => console.error(err));
