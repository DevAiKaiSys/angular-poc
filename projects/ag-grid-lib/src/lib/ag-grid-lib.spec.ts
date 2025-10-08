import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridLib } from './ag-grid-lib';

describe('AgGridLib', () => {
  let component: AgGridLib;
  let fixture: ComponentFixture<AgGridLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
