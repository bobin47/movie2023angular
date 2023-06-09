import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GheComponent } from './ghe.component';

describe('GheComponent', () => {
  let component: GheComponent;
  let fixture: ComponentFixture<GheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
