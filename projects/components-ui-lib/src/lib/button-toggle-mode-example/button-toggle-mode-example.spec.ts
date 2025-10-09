import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleModeExample } from './button-toggle-mode-example';

describe('ButtonToggleModeExample', () => {
  let component: ButtonToggleModeExample;
  let fixture: ComponentFixture<ButtonToggleModeExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggleModeExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonToggleModeExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
