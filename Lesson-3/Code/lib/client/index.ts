import "zone.js/dist/zone.js";
import "rxjs";
import "reflect-metadata";
import "es6-shim";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch(err => console.log(err));
