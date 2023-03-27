import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddFlimComponent } from './form-add-flim.component';

describe('FormAddFlimComponent', () => {
  let component: FormAddFlimComponent;
  let fixture: ComponentFixture<FormAddFlimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddFlimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddFlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
