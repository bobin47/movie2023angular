import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlimComponent } from './add-flim.component';

describe('AddFlimComponent', () => {
  let component: AddFlimComponent;
  let fixture: ComponentFixture<AddFlimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
