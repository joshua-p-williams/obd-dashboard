import { Component, OnInit } from '@angular/core';
import { Gauge } from './models/guage.model';

@Component({
  selector: 'obd-dashboard-ui',
  templateUrl: './obd-dashboard-ui.component.html',
  styleUrls: ['./obd-dashboard-ui.component.scss']
})
export class ObdDashboardUiComponent implements OnInit {

  public gauges: Array<{ name: string, gauge: Gauge, value?: number}> = Array<{ name: string, gauge: Gauge, value?: number}>();

  constructor() { 
    this.gauges.push({
      name: 'RPM',
      gauge: {
        label: 'Speed',
        append: 'MPH',
        max: 120,
      },
      value: 55,
    });

    this.gauges.push({
      name: 'SPEED',
      gauge: {
        label: 'Engine Speed',
        append: 'RPM',
        max: 7000,
        thresholds: {
          '0': {color: 'rgba(0, 150, 136, .9)'},
          '5000': {color: 'orange'},
          '6000': {color: 'red'}
        }
      },
      value: 5000,
    });
  }

  ngOnInit(): void {
  }

}
