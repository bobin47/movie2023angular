import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditUserComponent } from './popup-edit-user.component';

describe('PopupEditUserComponent', () => {
  let component: PopupEditUserComponent;
  let fixture: ComponentFixture<PopupEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
