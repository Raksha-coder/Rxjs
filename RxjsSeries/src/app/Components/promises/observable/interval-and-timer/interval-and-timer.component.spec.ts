import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalAndTimerComponent } from './interval-and-timer.component';

describe('IntervalAndTimerComponent', () => {
  let component: IntervalAndTimerComponent;
  let fixture: ComponentFixture<IntervalAndTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntervalAndTimerComponent]
    });
    fixture = TestBed.createComponent(IntervalAndTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
