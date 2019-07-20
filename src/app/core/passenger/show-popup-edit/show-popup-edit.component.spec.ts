import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPopupEditComponent } from './show-popup-edit.component';

describe('ShowPopupEditComponent', () => {
  let component: ShowPopupEditComponent;
  let fixture: ComponentFixture<ShowPopupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPopupEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPopupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
