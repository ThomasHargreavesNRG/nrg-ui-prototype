import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrgDataTableComponent } from './nrg-data-table.component';

describe('NrgDataTableComponent', () => {
  let component: NrgDataTableComponent;
  let fixture: ComponentFixture<NrgDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrgDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrgDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
