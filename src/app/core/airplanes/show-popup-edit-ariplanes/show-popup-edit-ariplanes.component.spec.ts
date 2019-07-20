import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPopupEditAriplanesComponent } from './show-popup-edit-ariplanes.component';

describe('ShowPopupEditAriplanesComponent', () => {
  let component: ShowPopupEditAriplanesComponent;
  let fixture: ComponentFixture<ShowPopupEditAriplanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPopupEditAriplanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPopupEditAriplanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
