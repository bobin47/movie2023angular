import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodashComponent } from './dodash.component';

describe('DodashComponent', () => {
  let component: DodashComponent;
  let fixture: ComponentFixture<DodashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
