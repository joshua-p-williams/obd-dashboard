import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObdDashboardUiComponent } from './obd-dashboard-ui.component';

describe('ObdDashboardUiComponent', () => {
  let component: ObdDashboardUiComponent;
  let fixture: ComponentFixture<ObdDashboardUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObdDashboardUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObdDashboardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
