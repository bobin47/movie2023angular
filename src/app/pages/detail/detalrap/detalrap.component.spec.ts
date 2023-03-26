import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalrapComponent } from './detalrap.component';

describe('DetalrapComponent', () => {
  let component: DetalrapComponent;
  let fixture: ComponentFixture<DetalrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
