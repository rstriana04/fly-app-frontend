import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPopupEditTicketsComponent } from './show-popup-edit-tickets.component';

describe('ShowPopupEditTicketsComponent', () => {
  let component: ShowPopupEditTicketsComponent;
  let fixture: ComponentFixture<ShowPopupEditTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPopupEditTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPopupEditTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
