# OBD Dashboard UI

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

This project has the following dependencies

* [ngx-gauge](https://github.com/ashish-chopra/ngx-gauge)

Add `ngx-guage` by running the following

```bash
cd projects/obd-dashboard-ui/
npm install ngx-gauge
cd ../../
```

We will add a gauge component.

```bash
ng generate component components/gauge --project obd-dashboard-ui
```

I changed the selector in `obd-dashboard-ui/src/lib/obd-dashboard-ui.component.ts` to `obd-dashboard-ui` and `gauge.component.ts` to `obd-dashboard-gauge`.

See [ngx-gauge](https://github.com/ashish-chopra/ngx-gauge) for details on adding `ngx-gauge`.

In order to interact with this library, we will include it in the main app.

Modify the `src/app/app.module.ts` to adding `import { ObdDashboardUiModule } from 'projects/obd-dashboard-ui/src/public-api';` as well as including the `ObdDashboardUiModule` module in the imports.

You can then use the new component

## Code scaffolding

Run `ng generate component component-name --project obd-dashboard-ui` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project obd-dashboard-ui`.
> Note: Don't forget to add `--project obd-dashboard-ui` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build obd-dashboard-ui` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build obd-dashboard-ui`, go to the dist folder `cd dist/obd-dashboard-ui` and run `npm publish`.

## Running unit tests

Run `ng test obd-dashboard-ui` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
