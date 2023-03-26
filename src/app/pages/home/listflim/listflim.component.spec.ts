import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListflimComponent } from './listflim.component';

describe('ListflimComponent', () => {
  let component: ListflimComponent;
  let fixture: ComponentFixture<ListflimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListflimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListflimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
