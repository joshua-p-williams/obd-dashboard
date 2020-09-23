import { 
  Component, 
  OnInit,
  Input 
} from '@angular/core';

import {
  GAUGE_DEFAULTS,
  Gauge
} from '../../models/guage.model';

@Component({
  selector: 'obd-dashboard-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  private _type: string = GAUGE_DEFAULTS.TYPE;
  private _size: number = GAUGE_DEFAULTS.SIZE;
  private _min: number = GAUGE_DEFAULTS.MIN;
  private _max: number = GAUGE_DEFAULTS.MAX;
  private _thick: number = GAUGE_DEFAULTS.THICK;
  private _cap: string = GAUGE_DEFAULTS.CAP;
  private _backgroundColor: string = GAUGE_DEFAULTS.BACKGROUND_COLOR;
  private _foregroundColor: string = GAUGE_DEFAULTS.FOREGROUND_COLOR;
  private _thresholds: object = GAUGE_DEFAULTS.THRESHOLDS;
  private _label: string = GAUGE_DEFAULTS.LABEL;
  private _append: string = GAUGE_DEFAULTS.APPEND;
  private _value: number = 0;
  private _gauge: Gauge = null;

  @Input()
  get type(): string { return this._type; }
  set type(value: string) {
      this._type = value;
  }

  @Input()
  get size(): number { return this._size; }
  set size(value: number) {
      this._size = value;
  }

  @Input()
  get min(): number { return this._min; }
  set min(value: number) {
      this._min = value;
  }

  @Input()
  get max(): number { return this._max; }
  set max(value: number) {
      this._max = value;
  }

  @Input()
  get thick(): number { return this._thick; }
  set thick(value: number) {
      this._thick = value;
  }

  @Input()
  get cap(): string { return this._cap; }
  set cap(value: string) {
      this._cap = value;
  }

  @Input()
  get backgroundColor(): string { return this._backgroundColor; }
  set backgroundColor(value: string) {
      this._backgroundColor = value;
  }

  @Input()
  get foregroundColor(): string { return this._foregroundColor; }
  set foregroundColor(value: string) {
      this._foregroundColor = value;
  }

  @Input()
  get thresholds(): object { return this._thresholds; }
  set thresholds(value: object) {
      this._thresholds = value;
  }

  @Input()
  get label(): string { return this._label; }
  set label(value: string) {
      this._label = value;
  }

  @Input()
  get append(): string { return this._append; }
  set append(value: string) {
      this._append = value;
  }

  @Input()
  get value(): number { return this._value; }
  set value(value: number) {
      this._value = value;
  }

  @Input()
  get gauge(): Gauge { return this._gauge; }
  set gauge(value: Gauge) {
      this._gauge = value;
  }

  constructor() { }

  ngOnInit(): void {
    if (this._gauge) {
      if (this._gauge.type != undefined) this.type = this._gauge.type;
      if (this._gauge.size != undefined) this.size = this._gauge.size;
      if (this._gauge.min != undefined) this.min = this._gauge.min;
      if (this._gauge.max != undefined) this.max = this._gauge.max;
      if (this._gauge.thick != undefined) this.thick = this._gauge.thick;
      if (this._gauge.cap != undefined) this.cap = this._gauge.cap;
      if (this._gauge.foregroundColor != undefined) this.foregroundColor = this._gauge.foregroundColor;
      if (this._gauge.backgroundColor != undefined) this.backgroundColor = this._gauge.backgroundColor;
      if (this._gauge.thresholds != undefined) this.thresholds = this._gauge.thresholds;
      if (this._gauge.label != undefined) this.label = this._gauge.label;
      if (this._gauge.append != undefined) this.append = this._gauge.append;
    }
  }
}
