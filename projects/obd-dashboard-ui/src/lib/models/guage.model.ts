const GAUGE_DEFAULTS = {
  TYPE: 'arch',
  SIZE: 400,
  MIN: 0,
  MAX: 100,
  THICK: 15,
  CAP: 'round',
  BACKGROUND_COLOR: 'rgba(96, 96, 96, 0.2)',
  FOREGROUND_COLOR: 'rgba(104, 0, 0, 1)',
  THRESHOLDS: Object.create(null),
  LABEL: 'Measurement',
  APPEND: null,
};

class Gauge {
  type?: string = GAUGE_DEFAULTS.TYPE;
  size?: number = GAUGE_DEFAULTS.SIZE;
  min?: number = GAUGE_DEFAULTS.MIN;
  max?: number = GAUGE_DEFAULTS.MAX;
  thick?: number = GAUGE_DEFAULTS.THICK;
  cap?: string = GAUGE_DEFAULTS.CAP;
  backgroundColor?: string = GAUGE_DEFAULTS.BACKGROUND_COLOR;
  foregroundColor?: string = GAUGE_DEFAULTS.FOREGROUND_COLOR;
  thresholds?: object = GAUGE_DEFAULTS.THRESHOLDS;
  label?: string = GAUGE_DEFAULTS.LABEL;
  append?: string = GAUGE_DEFAULTS.APPEND;
}

export {
  GAUGE_DEFAULTS,
  Gauge
}