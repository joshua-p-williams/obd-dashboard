# OBD Dashboard

A web component for rendering OBD values.

# Steps For Creating

This was created using angular cli with no routing and scss for styles.

```bash
ng new obd-dashboard
cd obd-dashboard
```

## Adding Angular Component

Start by building a regular Angular component as a library.

```bash
ng generate library obd-dashboard-ui
```

This creates a module, component and services. We won't be using the service so remove it's files.

* `projects\obd-dashboard-ui\src\lib\obd-dashboard-ui.service.ts`
* `projects\obd-dashboard-ui\src\lib\obd-dashboard-ui.service.spec.ts`

And remove it from the `projects\obd-dashboard-ui\src\public-api.ts`

Generate your custom angular componenets within the project definition and build them as you would any normal angular component.

See `projects\obd-dashboard-ui\README.md` for specifics about how these angular components were built.

Example.. The gauge component was added using the following;

```bash
ng generate component components/gauge --project obd-dashboard-ui
```

In order to interact with this library, we will include it in the main app.

Modify the `src/app/app.module.ts` to adding `import { ObdDashboardUiModule } from 'projects/obd-dashboard-ui/src/public-api';` as well as including the `ObdDashboardUiModule` module in the imports.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
