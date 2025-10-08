import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRowSelection } from './multi-row-selection';

describe('MultiRowSelection', () => {
  let component: MultiRowSelection;
  let fixture: ComponentFixture<MultiRowSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiRowSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiRowSelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
