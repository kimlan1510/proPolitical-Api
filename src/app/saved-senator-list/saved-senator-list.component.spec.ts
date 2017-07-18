import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedSenatorListComponent } from './saved-senator-list.component';

describe('SavedSenatorListComponent', () => {
  let component: SavedSenatorListComponent;
  let fixture: ComponentFixture<SavedSenatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedSenatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedSenatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
