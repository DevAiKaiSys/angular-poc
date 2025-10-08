import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRowClickedEvent } from './example-row-clicked-event';

describe('ExampleRowClickedEvent', () => {
  let component: ExampleRowClickedEvent;
  let fixture: ComponentFixture<ExampleRowClickedEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleRowClickedEvent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleRowClickedEvent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
