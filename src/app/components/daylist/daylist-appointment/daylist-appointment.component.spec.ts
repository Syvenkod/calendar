import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaylistAppointmentComponent } from './daylist-appointment.component';

describe('DaylistAppointmentComponent', () => {
  let component: DaylistAppointmentComponent;
  let fixture: ComponentFixture<DaylistAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaylistAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaylistAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
