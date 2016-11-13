import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);
