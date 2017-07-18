import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenatorListStateComponent } from './senator-list-state.component';

describe('SenatorListStateComponent', () => {
  let component: SenatorListStateComponent;
  let fixture: ComponentFixture<SenatorListStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenatorListStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenatorListStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
