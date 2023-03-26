import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimefimComponent } from './timefim.component';

describe('TimefimComponent', () => {
  let component: TimefimComponent;
  let fixture: ComponentFixture<TimefimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimefimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimefimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
