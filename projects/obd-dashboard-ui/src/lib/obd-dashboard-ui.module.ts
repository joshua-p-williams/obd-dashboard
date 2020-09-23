import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { ObdDashboardUiComponent } from './obd-dashboard-ui.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { GaugeComponent } from './components/gauge/gauge.component';

@NgModule({
  declarations: [
    ObdDashboardUiComponent, 
    GaugeComponent
  ],
  imports: [
    CommonModule,
    NgxGaugeModule
  ],
  exports: [ObdDashboardUiComponent]
})
export class ObdDashboardUiModule { }
