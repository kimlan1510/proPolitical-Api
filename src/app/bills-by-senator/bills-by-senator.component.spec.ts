import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsBySenatorComponent } from './bills-by-senator.component';

describe('BillsBySenatorComponent', () => {
  let component: BillsBySenatorComponent;
  let fixture: ComponentFixture<BillsBySenatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsBySenatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsBySenatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
