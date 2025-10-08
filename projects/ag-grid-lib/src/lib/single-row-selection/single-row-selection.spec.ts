import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRowSelection } from './single-row-selection';

describe('SingleRowSelection', () => {
  let component: SingleRowSelection;
  let fixture: ComponentFixture<SingleRowSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRowSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRowSelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
